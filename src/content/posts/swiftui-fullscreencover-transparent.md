---
title: SwiftUI .fullScreenCover 透明背景教學
pubDate: 2026-02-24
description: 教你點樣係SwiftUI度整透明背景既.fullScreenCover
categories: [技術]
tags: [SwiftUI, iOS, 教學]
banner: https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=1200
---

# SwiftUI .fullScreenCover 透明背景教學 🌌

今日教你點樣係 SwiftUI 度整透明背景既 `.fullScreenCover`！

## 效果

整一個半透明既 loading 畫面，等底層既 UI 隱隱約約見到～

## Code

```swift
// ... other code
.fullScreenCover(isPresented: $isLoading) {
    ZStack{
        Color.black.opacity(0.5).edgesIgnoringSafeArea(.all)
        VStack {
            ProgressView()
            Button("Stop loading") {
                isLoading.toggle()
            }
        }
    }
    .background(BackgroundBlurView())
}

// BackgroundBlurView
struct BackgroundBlurView: UIViewRepresentable {
    func makeUIView(context: Context) -> UIView {
        let view = UIVisualEffectView(effect: UIBlurEffect(style: .light))
        DispatchQueue.main.async {
            view.superview?.superview?.backgroundColor = .clear
        }
        return view
    }

    func updateUIView(_ uiView: UIView, context: Context) {}
}
```

## 運作原理

1. 用 `Color.black.opacity(0.5)` 整半透明黑色層
2. 用 `UIViewRepresentable` 包住 `UIVisualEffectView` 整模糊效果
3. `edgesIgnoringSafeArea(.all)` 確保填滿整個畫面

## 參考

Ref: [4SwiftUI](https://github.com/Asperi-Demo/4SwiftUI/blob/master/Answers/Translucent_background_for_fullScreenCover.md)

---

#SwiftUI #iOS #教學
