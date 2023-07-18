# Sprint Challenge: React Twitter Clone Projesi için REST API Oluşturma

## Endpointler

### Auth

- [ ] POST `/api/auth/register` - Kullanıcı kaydı oluşturur.
- [ ] POST `/api/auth/login` - Kullanıcı girişi yapar ve bir token döndürür.
- [ ] GET   `/api/auth/logout ` -Kullanıcı çıkış yapar ve ve mesaj döndürülür.

### Users

- [ ] GET `/api/users` - Tüm kullanıcıları döndürür.
- [ ] GET `/api/users/:id` - id'li kullanıcıyı döndürür.
- [ ] DELETE `/api/users/:id` - id'li kullanıcı kaydı silinir.
- [ ] PUT `/api/users/:id` - id'li kullanıcı bilgilerini günceller.

### POSTS

- [ ] GET `/api/posts` - Tüm tweetleri döndürür.
- [ ] GET `/api/posts/:id` - id'li tweet bilgilerini döner.
- [ ] POST `/api/posts/` - Yeni tweet oluşturur.
- [ ] PUT `/api/posts/:id` - id'li tweet bilgilerini günceller.
- [ ] DELETE `/api/posts/:id` - id'li tweet bilgilerini siler.

### POSTS-COMMENTS
- [ ] GET `/api/posts-comments/` - Postlara atılan yorumları döner.
- [ ] GET `/api/posts-comments/:postId ` -id'li tweete ait yorumları döner.

### COMMENTS
- [ ] GET `/api/comments/` -Yorumları döner.
- [ ] GET `/api/comments/:id` -id'li yorum bilgilerini döner.
- [ ] GET `/api/comments/posts/:postId` -id'li posta ait yorum bilgilerini döner.
- [ ] POST `/api/comments/` -Yorum oluşturur.
- [ ] PUT `/api/comments/:id` -id'li yorum bilgisini günceller.
- [ ] DELETE `/api/comments/:id` -id'li yorumu siler.

### LIKES
- [ ] GET `/api/likes/:postId` -ilgili id'ye sahip postun beğeni bilgisini döner.
- [ ] GET `/api/likes/comments/:commentsId` -ilgili yoruma ait beğeni bilgisini döner.
- [ ] POST `/api/likes/` -Beğeni oluşturur.
- [ ] DELETE `/api/likes/:postId` -ilgili id'ye sahip postun beğeni bilgilerini siler.
- [ ] DELETE `/api/likes/comments/:commentId` -id'li yoruma ait beğeni bilgisini siler.

## Proje Açıklaması

Tebrikler, Backend konularını tamamladın.

Bilgisayar bilimleri konularına geçmeden önce öğrendiğin her konuyu kullanarak -daha önce react tekrarı için yaptığın- twitter clone'u projesi için REST API oluşturacaksın. Bu senin Backend konusunda ne seviyede olduğunu gösterecek.
Yaptığın siteyi Heroku'da da yayınlayacaksın(sanal kart girmeyi ve sanal karta LİMİT KOYMAmaya dikkat!!!).
Workintech programını tamamladığında şirketler yaptığın bu projeye de bakacaklar. O yüzden öğrendiğin her konuyu kullandığın, tam çalışır durumda bir proje yapmanı tavsiye ederiz.

## Talimatlar

### Görev 1: Projenizin set-up'ını yapın.

- [ ] ilk olarak github hesabınızda bir repo oluşturun ve bilgisayarınıza clone'layın.
- [ ] `npm init -y` komutuyla package.json dosyası oluşturup kullanacağın kütüphaneleri projeye ekleyin.
      Örneğin:
  - `express`
  - `dotenv`
  - `knex` v.b.
- [ ] package.json dosyasında ihtiyacın olacak scriptleri yazmayı unutmayın.
- [ ] klasör yapısını anlaşılır ve anlamlı olacak şekilde hazırlayın.
- [ ] Her adımda commit atmayı unutmayın!!

### Görev 2: API

- [ ] Gerekli fonksiyonalite için ayrı endpointler oluşturun.
- [ ] En az 2 middleware fonksiyonu yazın ve doğru yerlerde kullanın.
- [ ] Postman'da her endpoint için ayrı bir request oluşturun. Oluşturduğunuz collection'ı export edin ve projenin içerisine ekleyin.
- [ ] Login için JWToken kullanın.

### Görev 3: DATA

- [ ] Knex configuration ayarlarını yapın.
- [ ] Farklı ortam(environment) ayarlarını yapın.
- [ ] Veritabanını tasarlayın.
- [ ] Migration ve seed dosyalarını oluşturun.

### Görev 4: UNIT ve ENTEGRASYON TESTİ

- [ ] Veritabanı erişim fonksiyonları için Unit Testleri oluşturun.
- [ ] API endpointleri için entegrasyon testleri yazın.
- [ ] Testler için environment'ı değiştirdiğinizden ve knex'de ayrı ayarlar kullandığınızdan emin olun.

#### PROJE DEĞERLENDİRME KRİTERLERİ:

- [ ] Proje dosyaları ve klasörleri doğru ve anlamlı olarak yapılandırılmış mı?
- [ ] .gitignore dosyası var mı?
- [ ] Dependency'ler doğru yapılandırılmış mı? (dependency, devDependency)
- [ ] Ayarlar farklı ortamlar için doğru yapılandırılmış mı ve doğru yerden okuyor mu?
- [ ] Router kullanılmış mı?
- [ ] Model fonksiyonları kullanılmış mı?
- [ ] response status kodları doğru mu, mesajları anlaşılır mı?
- [ ] reponse'da veri doğru şekilde dönüyor mu, gereksiz tekrar eden bilgiler var mı?
- [ ] Error Midlleware eklenmiş mi?
- [ ] En az 2 tane middleware fonskiyonu eklenmiş mi?
- [ ] JWToken doğru kullanılmış mı?
- [ ] Migration, Seed dosyaları doğru oluşturulmuş mu?
- [ ] Secret ve environment ayarları farklı ortamlar için ayrı olacak şekilde ayarlanmış mı?
- [ ] Postman'da collection oluşturulmuş ve export edilmiş mi?
- [ ] Unit ve entegrasyonları testleri yeterli miktarda yazılmış mı?
