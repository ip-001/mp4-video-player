import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

import { Mp4VideoPlayerStyles } from './mp4-video-player.styles.js';

export class Mp4VideoPlayer extends LitElement {
  @property({ type: String })
  name!: string;

  @property({ type: String })
  src!: string;

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

  static styles = Mp4VideoPlayerStyles;
}
