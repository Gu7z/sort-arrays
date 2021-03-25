const calculaMedia = (timeExec) => {
  let media = 0;

  for (const time of timeExec) {
    media += time;
  }

  media = media / 3;

  return Number(media.toFixed(4));

  // console.log(`Media do: ${alg.name} -> ${media}`);
};

module.exports = calculaMedia;
