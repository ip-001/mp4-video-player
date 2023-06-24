import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../mp4-video-player.js';

describe('Mp4VideoPlayer', () => {
  it('can set name via attribute', async () => {
    const el = await fixture(html` <mp4-video-player
      name="test name"
      src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4"
    >
    </mp4-video-player>`);

    expect(el.name).to.equal('test name');
  });
});
