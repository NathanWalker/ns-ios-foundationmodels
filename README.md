## Example NativeScript using iOS 26 FoundationModels

[FoundationModels](https://developer.apple.com/documentation/foundationmodels), introduced in iOS 26, provides access to Apple's on-device large language model that powers Apple Intelligence to help you perform intelligent tasks specific to your use case. 

This provides an example NativeScript app which demonstrates how to leverage streamed responses from Apple Intelligence using FoundationModels.

<iframe width="560" height="315" src="https://www.youtube.com/embed/WyxaerWwssQ?si=gqExNi2bDW8yDwM1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Try it

Prerequisites:
- [NativeScript Environment Setup](https://docs.nativescript.org/environment-setup.html)
- Xcode 26 with iOS 26: https://developer.apple.com/download
  - To process AI responses locally, you will also need macOS Tahoe
  - Be sure to set Xcode 26 as your active Xcode: `xcode-select -switch <path/to/xcode-26>`

```bash
ns debug ios
```
