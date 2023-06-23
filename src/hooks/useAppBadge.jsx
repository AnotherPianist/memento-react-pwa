import {useState} from "react";

export default function useAppBadge() {
  const [counter, setCounter] = useState(0);

  function setBadge() {
    setCounter(prevCounter => prevCounter + 1);
    if (navigator.setAppBadge)
      navigator.setAppBadge(counter);
    else if (navigator.setClientBadge)
      navigator.setClientBadge();
  }

  function clearBadge() {
    setCounter(1);
    if (navigator.clearAppBadge)
      navigator.clearAppBadge();
    else if (navigator.clearClientBadge)
      navigator.clearClientBadge();
  }

  return [setBadge, clearBadge];
}