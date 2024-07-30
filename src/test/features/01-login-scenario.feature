@smoke
Feature: Login Testleri

  Scenario: Geçerli verilerle login olabilmeliyim - Case 01
    Given Web sitesine giderim
    When Sign in linkine tıklarım
    And Email adres kutusuna "customer@practicesoftwaretesting.com" yazarım
    And Password kutusuna "welcome01" yazarım
    And Login butonuna tıklarım
    Then My account sayfasının açıldığını görürüm

  Scenario: Geçerli verilerle login olabilmeliyim - Case 02
    Given Web sitesine giderim
    When Sign in linkine tıklarım
    And Email adres kutusuna "customer2@practicesoftwaretesting.com" yazarım
    And Password kutusuna "welcome01" yazarım
    And Login butonuna tıklarım
    Then My account sayfasının açıldığını görürüm