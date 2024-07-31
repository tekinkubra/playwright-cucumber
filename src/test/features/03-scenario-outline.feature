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

      # Featurelar ıyazdıktan sonra npm test yazarsak  terminalde bize step leri veriyor 
      # dry run true olursa eklersek tanımlanmayan  seteplerı verıyor  
      # proje de eksık olan adım varsa onu kontrol edıyor true olunca
      # dry run tru dersek testler  kosulmaz sadece testlerde eksık adımlar varsa
      # onları verır

