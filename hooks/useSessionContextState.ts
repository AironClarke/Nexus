import themes from 'styles/themes.json';
import type { SessionContextState } from 'types/context/session';

const useSessionContextState = (): SessionContextState => ({
  theme: themes.default
});

export default useSessionContextState;
