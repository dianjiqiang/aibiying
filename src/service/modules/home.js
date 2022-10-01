import keyieRequest from '../request'

export function getGoodPriceInfo() {
  return keyieRequest.getRequest('/home/goodprice')
}
