const getAlbumList = async () => {
  const res = [
    {
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/84/5b/15/845b1521-4080-bb98-e1a0-6c353288173d/197190479423.jpg/632x632bf.webp",
    },
    {
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8e/cd/a8/8ecda813-6740-b214-3805-812848ab8070/888735945847.png/632x632bb.webp",
    },
    {
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/88/4e/1a/884e1a49-7ce1-7521-7216-cb9adc497090/cover_KM0018202_1.jpg/632x632bb.webp",
    },
    {
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/fe/73/93/fe7393cf-c637-a07d-1b2c-71040e31073a/Jobd8a9fb9b-5b55-420a-bc5c-9d509c14d4a5-152822503-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_291406616_1502901580-Time1689354055397.png/632x632bb.webp",
    },
  ];
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res);
    }, 2000);
  });
  return data;
};

export { getAlbumList };
