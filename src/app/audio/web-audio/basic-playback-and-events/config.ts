import {  BasicPlaybackAndEvents } from './scenes/BasicPlaybackAndEvents';

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'BasicPlaybackAndEvents',
  url: 'https://github.com/digitsensitive/phaser3-typescript',
  version: '2.0',
  width: 768,
  height: 576,
  type: Phaser.AUTO,
  parent: 'game',
  scene: [ BasicPlaybackAndEvents],
  input: {
    keyboard: true
  },
  backgroundColor: '#3A99D9',
  render: { pixelArt: false, antialias: false }
};
