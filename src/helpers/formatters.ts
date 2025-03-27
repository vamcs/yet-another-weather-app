export const formatNumber = ({
  value,
  unit,
}: {
  value: number
  unit: 'celsius' | 'millimeter' | 'meter-per-second'
}) => {
  return value.toLocaleString('sv-SE', {
    style: 'unit',
    unit,
  })
}

export const formatTime = ({ time }: { time: string }) => {
  return new Date(time).toLocaleString('sv-SE', {
    timeZone: 'Europe/Stockholm',
  })
}
