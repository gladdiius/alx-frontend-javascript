// Function to balance between two downloads and return the value of the first resolved promise
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
