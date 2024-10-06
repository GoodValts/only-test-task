export const calculateCirclePosition = (index: number, angle: number) => {
  const radius = 530 / 2;
  const halfCircleDeg = 180;
  const x =
    radius *
    Number(Math.cos((index * angle * Math.PI) / halfCircleDeg).toFixed(3));
  const y =
    radius *
    Number(Math.sin((index * angle * Math.PI) / halfCircleDeg).toFixed(3));
  return { x: x, y: y };
};
