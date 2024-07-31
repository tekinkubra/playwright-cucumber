Feature: Register Testleri

  @register
  Scenario: Register sayfasına gidebilmeliyim
    Given Web sitesine giderim
    When Sign in linkine tıklarım
    And Register your account linkine tıklarım
    Then Customer registration başlığını görürüm

    # npm test yazarsak  terminalde bize step leri veriyor 