import IconNotification from "../icons/icon-notification";
import { Button } from "../ui/button";

const NotificationButton = () => {
  return (
    <Button variant="secondary" size="icon" className="rounded-full relative">
      <IconNotification className="h-5 w-5" />
      <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center" />
    </Button>
  );
};

export default NotificationButton;
