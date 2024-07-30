Feature: Register Testleri

  @register
  Scenario: Register sayfasına gidebilmeliyim
    Given Web sitesine giderim
    When Sign in linkine tıklarım
    And Register your account linkine tıklarım
    Then Customer registration başlığını görürüm