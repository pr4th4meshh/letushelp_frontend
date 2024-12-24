// Description splitter function
export const splitDescription = (description: string) => {
  const midpoint = Math.floor(description.length / 2) // finding the center of the description
  const lastSpaceIndex = description.lastIndexOf(" ", midpoint) // finding the last space in the description
  const firstHalf = description.slice(0, lastSpaceIndex) // splitting the description into two halves
  const secondHalf = description.slice(lastSpaceIndex).trim() // removing the last space from the second half
  return { firstHalf, secondHalf }
}
