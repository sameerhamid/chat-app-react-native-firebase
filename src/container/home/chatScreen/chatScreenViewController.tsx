export interface ChatScreenRouteParmasTypes {
  name?: string;
  email?: string;
  mobile?: string;
  password?: string;
  userId?: string;
  myId: string;
}
interface ChatScreenViewControllerTypes {}

const useChatScreenViewController = (
  routeParams: ChatScreenRouteParmasTypes,
): ChatScreenViewControllerTypes => {
  return {};
};

export default useChatScreenViewController;
