import { Component, NO_ERRORS_SCHEMA, model, signal } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule,
} from "@nativescript/angular";
import { EventData, TextView, Utils } from "@nativescript/core";

@Component({
  selector: "ns-home",
  templateUrl: "./home.html",
  imports: [NativeScriptCommonModule, NativeScriptFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Home {
  userInput = model("");
  processing = signal(false);
  responseTextView: TextView | null = null;

  fetchAIResponse() {
    if (__APPLE__ && Utils.SDK_VERSION >= 26) {
      console.log("Fetching AI response for:", this.userInput());
      this.processing.set(true);
      AI.shared.streamResponseFor(this.userInput(), (response) => {
        console.log("AI Response:", response || "");
        this.processing.set(false);
        this.setResponseData(response || "");
      });
    }
  }

  setResponseData(response: string) {
    if (this.responseTextView) {
      // parsing responses into rendered markdown
      const options = NSAttributedStringMarkdownParsingOptions.alloc().init();
      options.interpretedSyntax =
        NSAttributedStringMarkdownInterpretedSyntax.InlineOnlyPreservingWhitespace;
      const attr =
        NSMutableAttributedString.alloc().initWithMarkdownStringOptionsBaseURLError(
          response,
          options,
          null
        );
      const fullRange = NSRangeFromString(`{0,${attr.length}}`);
      const font = UIFont.systemFontOfSize(16);
      attr.addAttributeValueRange(NSFontAttributeName, font, fullRange);
      this.responseTextView.ios.attributedText = attr;
    }
  }

  loadedResponseTextView(event: EventData) {
    this.responseTextView = event.object as TextView;
  }
}
