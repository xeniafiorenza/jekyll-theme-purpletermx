# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-purpletermx"
  spec.version       = "0.1.0"
  spec.authors       = ["Xenia Fiorenza"]
  spec.email         = ["xenia.anong@gmail.com"]

  spec.summary       = "A basic terminal window-inspired theme. Built for my GitHub pages."
  spec.homepage      = "https://github.com/xeniafiorenza/jekyll-theme-purpletermx"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.9.0"
end
