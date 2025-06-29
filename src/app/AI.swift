import Foundation
import FoundationModels

@available(iOS 26.0, *)
@objcMembers
@objc(AI)
public class AI: NSObject {
    public static let shared = AI()

    public func streamResponseFor(_ prompt: String, _ completion: @escaping (String?) -> Void) {
        let session = LanguageModelSession()
        Task {
            do {
                let stream = session.streamResponse(to: prompt)
                for try await chunk in stream {
                    // Notify immediately on the MainActor (e.g. to update UI)
                    await MainActor.run { completion(chunk) }
                }
            } catch {
                print("Error generating text: \(error)")
                completion(nil)
            }
        }
    }
}
