import { Sticker, createSticker, StickerTypes } from 'wa-sticker-formatter';
import fs from 'fs/promises';
import config from '../../config.cjs';

const stickerCommand = async (m, gss) => {
  const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

const validCommands = ['take'];
  
  
const sticker = new Sticker(image, {
  pack: 'My Pack', // The pack name
  author: '.𝑇𝛥𝛪𝐹𝑈𝑅🥀| 𝐿𝑈𝐶𝛪𝐹𝛯𝑅🖤', // The author name
  type: StickerTypes.FULL, // The sticker type
  categories: ['🤩', '🎉'], // The sticker category
  id: '12345', // The sticker id
  quality: 50, // The quality of the output file
  background: 'transparent' // The sticker background color (only for full stickers)
  
})
const buffer = await sticker.toBuffer() // convert to buffer


export default takeCommand;
