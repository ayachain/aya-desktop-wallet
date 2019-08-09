function ArgumentsEscape (data) {
  let params = new URLSearchParams()
  data.arg.forEach(item => {
    params.append('arg', item)
  })

  if (data.opt) {
    for (const key in data.opt) {
      params.append(`${key}`, data.opt[key])
    }
  }
  return params.toString()
}

export default ArgumentsEscape
