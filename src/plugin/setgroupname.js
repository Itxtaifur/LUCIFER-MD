const setGroupName = async (m, gss) => {
  try {
    const botNumber = await gss.decodeJid(gss.user.id);
    const prefixMatch = m.body.match(/^[\\/!#.]/);
    const prefix = prefixMatch ? prefixMatch[0] : '/';
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
    const text = m.body.slice(prefix.length + cmd.length).trim();

    const validCommands = ['setgroupname', 'setname'];

    if (!validCommands.includes(cmd)) return;

    if (!m.isGroup) return m.reply("*📛 𝐓ʜɪꜱ 𝐂ᴏᴍᴍᴀɴᴅ 𝐂ᴀɴ 𝐎ɴʟʏ 𝐁ᴇ 𝐔ꜱᴇᴅ 𝐈ɴ 𝐆ʀᴏᴜᴘ 𝐃ᴇᴀʀ*");
    const groupMetadata = await gss.groupMetadata(m.from);
    const participants = groupMetadata.participants;
    const botAdmin = participants.find(p => p.id === botNumber)?.admin;
    const senderAdmin = participants.find(p => p.id === m.sender)?.admin;

    if (!botAdmin) return m.reply("*📛 ☠ＬＵＣＩＦＥＲ-Ｖ.３ 𝐀ɴ 𝐀ᴅᴍɪɴ 𝐓ᴏ 𝐔ꜱᴇ 𝐓ʜɪꜱ 𝐂ᴏᴍᴍᴀɴᴅ*");
    if (!senderAdmin) return m.reply("*📛 𝐘ᴏᴜ 𝐌ᴜꜱᴛ 𝐁ᴇ 𝐀ɴ 𝐀ᴅᴍɪɴ 𝐓ᴏ 𝐔ꜱᴇ 𝐓ʜɪꜱ 𝐂ᴏᴍᴍᴀɴᴅ*");

    if (!text) return m.reply("*📛 PLEASE PROVIDE A NAME TO SET*");

    await gss.groupUpdateSubject(m.from, text);
    m.reply(`Group Name Has Been Set To: ${text}`);
  } catch (error) {
    console.error('Error:', error);
    m.reply('An error occurred while processing the command.');
  }
};

export default setGroupName;
