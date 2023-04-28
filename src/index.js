import ToolboxIcon from './svg/toolbox.svg';
import PlaceholderImage from './svg/img-placeholder.svg';
import './index.css';
import Uploader from './uploader';

/**
 * Timeout when loader should be removed
 */
const LOADER_DELAY = 500;

/**
 * @typedef {object} ParagraphImageData
 * @description Personality Tool's input and output data format
 * @property {string} text — paragraph text
 * @property {string} title - paragraph's image title
 * @property {string} description - paragraph's image description
 * @property {Object|null} image - paragraph's image
 */

/**
 * @typedef {object} ParagraphImageConfig
 * @description Config supported by Tool
 * @property {string} endpoint - image file upload url
 * @property {string} field - field name for uploaded image
 * @property {string} types - available mime-types
 * @property {object} additionalRequestData - any data to send with requests
 * @property {object} additionalRequestHeaders - allows to pass custom headers with Request
 * @property {string} textPlaceholder - placeholder for text field
 * @property {string} titlePlaceholder - placeholder for title field
 * @property {string} descriptionPlaceholder - placeholder for description field
 */

/**
 * @typedef {object} UploadResponseFormat
 * @description This format expected from backend on file uploading
 * @property {number} success - 1 for successful uploading, 0 for failure
 * @property {object} file - Object with file data.
 *                           'url' is required,
 *                           also can contain any additional data that will be saved and passed back
 * @property {string} file.url - [Required] image source URL
 */

/**
 * Paragraph Image Tool for the Editor.js
 */
export default class ParagraphImage {
  /**
   * @param {ParagraphImageData} data - Tool's data
   * @param {ParagraphImageConfig} config - Tool's config
   * @param {API} api - Editor.js API
   */
  constructor({ data, config, api }) {
    this.api = api;

    this.nodes = {
      wrapper: null,
      text: null,
      image: null,
      title: null,
      description: null
    };

    this.config = {
      endpoint: config.endpoint || '',
      field: config.field || 'image',
      types: config.types || 'image/*',
      additionalRequestData: config.additionalRequestData || {},
      additionalRequestHeaders: config.additionalRequestHeaders || {},
      textPlaceholder: config.textPlaceholder || 'Text',
      titlePlaceholder: config.titlePlaceholder || 'Title',
      descriptionPlaceholder: config.descriptionPlaceholder || 'Description'
    };

    /**
     * Set saved state
     */
    this.data = data;

    /**
     * Module for image files uploading
     */
    this.uploader = new Uploader({
      config: this.config,
      onUpload: (response) => this.onUpload(response),
      onError: (error) => this.uploadingFailed(error)
    });
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   */
  static get toolbox() {
    return {
      icon: ToolboxIcon,
      title: 'Paragraph Image'
    };
  }

  /**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   */
  static get conversionConfig() {
    return {
      export: 'text', // to convert Paragraph to other block, use 'text' property of saved data
      import: 'text' // to covert other block's exported string to Paragraph, fill 'text' property of tool data
    };
  }

  /**
   * File uploading callback
   * @param {UploadResponseFormat} response
   */
  onUpload(response) {
    const { body: { success, file } } = response;

    if (success && file && file.url) {
      this.data.image = file;

      this.showFullImage();
    }
  }

  /**
   * On success: remove loader and show full image
   */
  showFullImage() {
    setTimeout(() => {
      this.nodes.image.classList.remove(this.CSS.loader);
      this.setImage(this.data.image.url);
    }, LOADER_DELAY);
  }

  /**
   * On fail: remove loader and reveal default image placeholder
   */
  stopLoading() {
    setTimeout(() => {
      this.nodes.image.classList.remove(this.CSS.loader);
      this.nodes.image.removeAttribute('style');
    }, LOADER_DELAY);
  }

  /**
   * Show loader when file upload started
   */
  addLoader() {
    this.nodes.image.style.background = 'none';
    this.nodes.image.classList.add(this.CSS.loader);
  }

  /**
   * If file uploading failed, remove loader and show notification
   * @param {string} errorMessage -  error message
   */
  uploadingFailed(errorMessage) {
    this.stopLoading();

    this.api.notifier.show({
      message: errorMessage,
      style: 'error'
    });
  }

  /**
   * Tool's CSS classes
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      loader: this.api.styles.loader,

      /**
       * Tool's classes
       */
      wrapper: 'cdx-paragraph-image',
      card: 'cdx-paragraph-image__card',
      fields: 'cdx-paragraph-image__fields',
      image: 'cdx-paragraph-image__image',
      title: 'cdx-paragraph-image__title',
      text: 'cdx-paragraph-image__text',
      description: 'cdx-paragraph-image__description',
      deleteImageButton: 'cdx-paragraph-image__delete-img-btn'
    };
  }

  /**
   * Return Block data
   * @param {HTMLElement} toolsContent
   * @return {ParagraphImageData}
   */
  save(toolsContent) {
    const text = (this.nodes.text.innerHTML || '').trim();
    const title = (this.nodes.title.textContent || '').trim();
    const description = (this.nodes.description.textContent || '').trim();

    Object.assign(this.data, { text, title, description });

    return this.data;
  }

  /**
   * Sanitizer rules
   */
  static get sanitize() {
    const defaultConfig = {
      br: true,
      b: true,
      i: true,
      a: true
    };

    return {
      title: defaultConfig,
      description: defaultConfig,
      text: {
        br: true,
        b: true,
        i: true,
        a: true
      }
    };
  }

  /**
   * Renders Block content
   * @return {HTMLDivElement}
   */
  render() {
    const { text, image, title, description } = this.data;

    this.nodes.wrapper = this.make('div', [this.CSS.baseClass, this.CSS.wrapper]);

    // Text
    this.nodes.text = this.make('div', [this.CSS.input, this.CSS.text], {
      contentEditable: true,
      innerHTML: text || ''
    });

    this.nodes.text.dataset.placeholder = this.config.textPlaceholder;
    this.nodes.text.addEventListener('keyup', this.onKeyUp);

    // Title
    this.nodes.title = this.make('div', this.CSS.title, {
      contentEditable: true
    });
    this.nodes.title.dataset.placeholder = this.config.titlePlaceholder;

    if (title) {
      this.nodes.title.textContent = title;
    }

    // Description
    this.nodes.description = this.make('div', this.CSS.description, {
      contentEditable: true
    });
    this.nodes.description.dataset.placeholder = this.config.descriptionPlaceholder;

    if (description) {
      this.nodes.description.textContent = description;
    }

    // Image
    this.nodes.image = this.make('div', this.CSS.image);

    if (image) {
      this.setImage(image.url);
    } else {
      this.setImagePlaceholder();
    }

    const deleteImageButton = this.make('button', this.CSS.deleteImageButton);

    this.api.tooltip.onHover(deleteImageButton, 'Delete', {
      placement: 'top',
      hidingDelay: 500
    });

    deleteImageButton.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      this.setImagePlaceholder();
      this.data.image = null;
    });

    this.nodes.image.appendChild(deleteImageButton);

    this.nodes.image.addEventListener('click', () => {
      this.uploader.uploadSelectedFile({
        onPreview: () => {
          this.addLoader();
        }
      });
    });

    const fieldsWrapper = this.make('div', this.CSS.fields);

    fieldsWrapper.appendChild(this.nodes.title);
    fieldsWrapper.appendChild(this.nodes.description);

    const cardWrapper = this.make('div', this.CSS.card);

    cardWrapper.appendChild(this.nodes.image);
    cardWrapper.appendChild(fieldsWrapper);

    this.nodes.wrapper.appendChild(this.nodes.text);
    this.nodes.wrapper.appendChild(cardWrapper);

    return this.nodes.wrapper;
  }

  /**
   * @param {string} url
   */
  setImage(url) {
    this.nodes.image.style.background = `url('${url}') center center / contain no-repeat`;
  }

  /**
   * Set image placeholder
   */
  setImagePlaceholder() {
    this.nodes.image.style.background = `#f6f6f9 url('data:image/svg+xml,${PlaceholderImage}') center center no-repeat`;
  }

  /**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */
  onKeyUp(e) {
    if (e.code !== 'Backspace' && e.code !== 'Delete') {
      return;
    }

    const { textContent } = this.nodes.text;

    if (textContent === '') {
      this.nodes.text.innerHTML = '';
    }
  }

  /**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphImageData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(savedData) {
    return savedData.text.trim() !== '';
  }

  /**
   * Helper method for elements creation
   * @param tagName
   * @param classNames
   * @param attributes
   * @return {HTMLElement}
   */
  make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  }
}
