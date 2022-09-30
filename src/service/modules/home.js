import keyieRequest from '../request'

export function getHighscore() {
  return keyieRequest.getRequest('/home/highscore')
}
