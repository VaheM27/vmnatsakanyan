export const tick = (
  setDelta,
  text,
  setLoopNum,
  setIsDeleting,
  setIndex,
  toRotate,
  period,
  setText,
  isDeleting,
  loopNum
) => {
  let i = loopNum % toRotate.length;
  let fullText = toRotate[i];
  let updatedText = isDeleting
    ? fullText.substring(0, text.length - 1)
    : fullText.substring(0, text.length + 1);

  setText(updatedText);

  if (isDeleting) {
    setDelta((prevDelta) => prevDelta / 2);
  }

  if (!isDeleting && updatedText === fullText) {
    setIsDeleting(true);
    setIndex((prevIndex) => prevIndex - 1);
    setDelta(period);
  } else if (isDeleting && updatedText === "") {
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
    setIndex(1);
    setDelta(500);
  } else {
    setIndex((prevIndex) => prevIndex + 1);
  }
};
