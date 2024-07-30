Feature: Login Testleri

  Scenario Outline: Geçerli verilerle login olabilmeliyim - Case 05
    Given Web sitesine giderim
    When Sign in linkine tıklarım
    And Email adres kutusuna "<email>" yazarım
    And Password kutusuna "<password>" yazarım
    And Login butonuna tıklarım
    Then My account sayfasının açıldığını görürüm

    Examples:
      | email                                 | password  |
      | customer@practicesoftwaretesting.com  | welcome01 |
      | customer2@practicesoftwaretesting.com | welcome01 |
