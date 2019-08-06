function ArgumentsEscape (data) {
  let params = new URLSearchParams()
  for (const iterator of data) {
    params.append('arg', iterator)
  }
  return params.toString()
}

export default ArgumentsEscape
