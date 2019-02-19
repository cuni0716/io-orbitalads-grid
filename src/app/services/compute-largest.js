const isConnected = (coordinate, block) => block.some(blockCoordinate => (
  (coordinate[0] === blockCoordinate[0]
    && Math.abs(Number(coordinate[1]) - Number(blockCoordinate[1])) === 1)
  || (coordinate[1] === blockCoordinate[1]
    && Math.abs(Number(coordinate[0]) - Number(blockCoordinate[0])) === 1)));

export const addCoordinate = (coordinate, blocks) => {
  let belongs = [coordinate];
  const notBelongs = [];

  blocks.forEach((block) => {
    if (isConnected(coordinate, block)) {
      belongs = [...belongs, ...block];
    } else {
      notBelongs.push(block);
    }
  });


  notBelongs.push(belongs);
  return notBelongs;
};

const calculateBlocks = (coordinates) => {
  let blocks = [];
  for (const index in coordinates) {
    blocks = addCoordinate(coordinates[index], blocks);
  }

  return blocks;
};

export default (coordinates) => {
  const blocks = calculateBlocks(coordinates);
  if (!blocks.length) {
    return 0;
  }

  return Math.max(...blocks.map(a => a.length));
};
