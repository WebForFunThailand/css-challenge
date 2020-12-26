import domtoimage from 'dom-to-image';

const useDomToImage = (element: HTMLElement, targetImage: HTMLImageElement) =>
  domtoimage.toPng(element).then((dataUrl) => {
    const img = targetImage;
    img.src = dataUrl;
  });

export default useDomToImage;
