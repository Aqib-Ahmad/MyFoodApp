import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [OnelineStatus, setOnelineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => setOnelineStatus(false));
    window.addEventListener("online", () => setOnelineStatus(true));
  }, []);
  return OnelineStatus;
};

export default useOnlineStatus;
