import { useState, useEffect, useCallback } from 'react'

export default function useCleanTimeout() {
  const [storedTimeout, setStoredTimeout] = useState<NodeJS.Timeout>()
  useEffect(() => {
    return () => {
      storedTimeout && clearTimeout(storedTimeout)
    }
  }, [storedTimeout])

  return useCallback((callback: (...params: any[]) => void, time: number) => {
    const timeout = setTimeout(callback, time)
    setStoredTimeout(timeout)
  }, [])
}
