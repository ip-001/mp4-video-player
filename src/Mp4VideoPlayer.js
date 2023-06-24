import { html, css, LitElement } from 'lit';

export class Mp4VideoPlayer extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr auto;
      grid-template-areas:
        'video'
        'info ';
      box-sizing: border-box;
    }

    video {
      grid-area: video;
      width: 100%;
      height: auto;
      box-sizing: border-box;
    }

    main {
      grid-area: info;
      width: 100%;
      height: auto;
      padding: 1.25rem 0;
      box-sizing: border-box;
    }

    h6 {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 1.25rem;
      letter-spacing: 0.15px;
      margin: 0;
      color: black;
    }

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;
      font-weight: 400;
      display: block;
      padding: 0.5rem 0.125rem;
      padding-bottom: 0.125rem;
      color: var(--secondary-color);
    }
  `;

  static properties = {
    name: { type: String },
    src: { type: String },
  };

  render() {
    return html`
      <video controls controlsList="nodownload">
        <source src=${this.src} type="video/mp4" />
      </video>

      <main>
        <h6>${this.name}</h6>
        <span>video</span>
      </main>
    `;
  }
}
