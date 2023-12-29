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
    {
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Video112/v4/e0/62/ab/e062abb2-166a-6143-b900-f21edf54e739/Job5834c79a-6bf2-46ea-96ac-fcdbcd6e3e6d-134465492-PreviewImage_preview_image_nonvideo_sdr-Time1658870263192.png/632x632bb.webp",
    },
    {
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/51/43/f4/5143f45c-bf3c-b880-8564-bc9bac7e535c/192641874413_Cover.jpg/632x632bb.webp",
    },
    {
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Video112/v4/69/c2/23/69c223cf-1b97-8f02-81e1-54f13034c903/Jobb3243dad-5c44-4031-9489-91f45c67d8dc-133810727-PreviewImage_preview_image_nonvideo_sdr-Time1657289708009.png/632x632bb.webp",
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
