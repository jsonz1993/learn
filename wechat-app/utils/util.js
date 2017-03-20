const app = getApp();

const openImg = e => {
  wx.previewImage({
      urls: [e.currentTarget.dataset.src]
  });
}

export {
  openImg
}
