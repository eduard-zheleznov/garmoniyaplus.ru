self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/pwa-icon-192.png",
        "destination": "/pwa-icon-192"
      },
      {
        "source": "/pwa-icon-512.png",
        "destination": "/pwa-icon-512"
      },
      {
        "source": "/apple-icon.png",
        "destination": "/apple-icon"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()