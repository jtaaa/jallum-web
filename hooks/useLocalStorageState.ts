import { useCallback, useMemo, useState } from "react"
import { IS_SERVER } from "../utils/constants"

export function useLocalStorageState<T>(
  key: string,
  initialValue: T
): [T, (newValue: T) => void]

export function useLocalStorageState<T>(
  key: string
): [T | undefined, (newValue: T | undefined) => void]

export function useLocalStorageState<T>(
  key: string,
  initialValue?: T
): [T | undefined, (newValue: T | undefined) => void] {
  const initialLSValue = useMemo(() => {
    let value: T | undefined = undefined
    const rawLSValue = IS_SERVER ? null : window.localStorage.getItem(key)
    try {
      if (rawLSValue !== null) {
        value = JSON.parse(rawLSValue)
      }
    } catch (err) {
      console.error(`Could not parse value for "${key}" in local storage.`, {
        value: rawLSValue,
      })
    } finally {
      return value
    }
  }, [key])

  const [value, setValue] = useState<T | undefined>(
    initialLSValue ?? initialValue
  )

  const setValueAndLS = useCallback(
    (newValue: T | undefined) => {
      setValue(newValue)
      if (newValue === undefined) {
        window.localStorage.removeItem(key)
      } else {
        window.localStorage.setItem(key, JSON.stringify(newValue))
      }
    },
    [key]
  )

  return [value, setValueAndLS]
}
