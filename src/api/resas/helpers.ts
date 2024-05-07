export type ResasResponse<Result extends object> = {
  message: string | null
  result: Result
}

export const fetchResasApi = async <Result extends object>(
  url: `/api/resas/v1/${string}`,
) => {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(
      `Failed to fetch ${res.url}: ${res.status} ${res.statusText}`,
    )
  }

  const data: ResasResponse<Result> = await res.json()
  if (data.message) {
    throw new Error(`Failed to fetch ${res.url}: ${data.message}`)
  }
  if (!("result" in data)) {
    throw new Error(
      `Failed to fetch ${res.url}: result field not found in response`,
    )
  }

  return data.result
}
