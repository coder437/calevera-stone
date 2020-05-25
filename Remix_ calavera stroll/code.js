var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a0915b38-30e1-4ac7-9b4c-304792482349","4aa3e07d-69f7-4c74-b349-357993a4bfff","af3616e3-94f5-4816-969f-6f9f801e022c","b0bfec08-307b-498d-bd20-3a59e65bec98","033e668e-aa0e-4261-bc2e-829c03bbc09c","31af6ad0-9fa9-490a-8a8a-f60ca0220f19","8100a0e4-8472-4ebc-9e2a-dbfb43dac598","a4a0c3d6-4038-47d1-a69d-7b9d3bb79ba0","e1a23eeb-bc3d-4bb0-baaa-5f0c006cd6b8","a09c76a9-876e-494d-9c14-073bdda22dda","60a7960a-4cc8-4194-bc70-90c4e441db6b","2bd0d9bf-52a0-4d79-b85b-5d16e9161df3","39780bb1-81e6-4fd2-a134-b1b8e987f7b9","027b60ce-af59-4224-881a-95a51ccd3a1e","aa669f65-dad2-42ca-828a-4c2f512c9eb0","9b0474a2-db7f-428a-afa7-4a7e30ec5a12","406d0289-8cdd-4df0-997f-2ace07171e38","cdada175-5db3-4d30-961c-a1e7ef55302e","e5d54516-e991-44d7-a245-7d23fbc34571","a9ad4b39-db04-4506-a5c2-869613b0e812","2a10d124-82d2-4ee4-a06f-9d472c72e6a8","0db5fc22-21cb-4858-ace8-2d32725575d9","9265b1ca-b9e2-4fb5-ae27-1d5d47f48f13","135be9bf-1b41-4daf-bb0d-b2d09011b798","892a26b5-9610-4ba4-99e3-c97d40a19de0","5c3ba269-7ebd-424f-ab05-5800741dad72","ebb17a24-b4b1-42f8-a5df-2fe9f3352348","60db77cb-755a-4bbd-bcee-acb001b7dd38","2c488873-acd5-46a4-86fb-5ff0a2aa1bc2","6edc84e7-838b-43eb-abf2-1f07f7602664","b7a28284-133d-48d5-a689-18be9235c648","1ecd57da-9472-4f3d-8659-dd072251b263","1e72fa4e-33c8-4ffa-95d1-447b57b4564f","4c9145e8-36b7-4841-a9f2-0b1f0c8fe472","d5c6b06c-c332-4ed9-9b46-4220264c9e5f"],"propsByKey":{"a0915b38-30e1-4ac7-9b4c-304792482349":{"name":"stillskull","sourceUrl":null,"frameSize":{"x":48,"y":40},"frameCount":12,"looping":true,"frameDelay":12,"version":"h6pFWKKVWe_35XLpM66ryXTooq8f9ucP","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":160},"rootRelativePath":"assets/a0915b38-30e1-4ac7-9b4c-304792482349.png"},"4aa3e07d-69f7-4c74-b349-357993a4bfff":{"name":"deadSkull","sourceUrl":null,"frameSize":{"x":77,"y":91},"frameCount":4,"looping":true,"frameDelay":12,"version":"q00L0VasbuiN7z1dZ9lkPyGRHLaalKjR","loadedFromSource":true,"saved":true,"sourceSize":{"x":154,"y":182},"rootRelativePath":"assets/4aa3e07d-69f7-4c74-b349-357993a4bfff.png"},"af3616e3-94f5-4816-969f-6f9f801e022c":{"name":"rollingskull","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":4,"looping":true,"frameDelay":2,"version":"cbTqXo1x3Ib2k8EwE1r2tihEAUMGKetc","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":96},"rootRelativePath":"assets/af3616e3-94f5-4816-969f-6f9f801e022c.png"},"b0bfec08-307b-498d-bd20-3a59e65bec98":{"name":"powering","sourceUrl":null,"frameSize":{"x":55,"y":68},"frameCount":6,"looping":true,"frameDelay":2,"version":"NTW_hd5p.VVItBLF4v85SL7U6ldV8bjb","loadedFromSource":true,"saved":true,"sourceSize":{"x":165,"y":136},"rootRelativePath":"assets/b0bfec08-307b-498d-bd20-3a59e65bec98.png"},"033e668e-aa0e-4261-bc2e-829c03bbc09c":{"name":"blastingOff","sourceUrl":null,"frameSize":{"x":51,"y":55},"frameCount":9,"looping":true,"frameDelay":2,"version":"_bereWn6iHVvncct4yfonc.gVNR7PMdS","loadedFromSource":true,"saved":true,"sourceSize":{"x":153,"y":165},"rootRelativePath":"assets/033e668e-aa0e-4261-bc2e-829c03bbc09c.png"},"31af6ad0-9fa9-490a-8a8a-f60ca0220f19":{"name":"cavebackground","sourceUrl":"assets/api/v1/animation-library/gamelab/noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM/category_backgrounds/background_cave.png"},"8100a0e4-8472-4ebc-9e2a-dbfb43dac598":{"name":"block","sourceUrl":null,"frameSize":{"x":81,"y":31},"frameCount":1,"looping":true,"frameDelay":12,"version":"DRUhna7.QpUGQiZIUYLQOSTvANwG0x06","loadedFromSource":true,"saved":true,"sourceSize":{"x":81,"y":31},"rootRelativePath":"assets/8100a0e4-8472-4ebc-9e2a-dbfb43dac598.png"},"a4a0c3d6-4038-47d1-a69d-7b9d3bb79ba0":{"name":"verticalBlock","sourceUrl":null,"frameSize":{"x":31,"y":81},"frameCount":1,"looping":true,"frameDelay":12,"version":"Vv5.UqPPMtszMJqswbT87_1RkS.1luEI","loadedFromSource":true,"saved":true,"sourceSize":{"x":31,"y":81},"rootRelativePath":"assets/a4a0c3d6-4038-47d1-a69d-7b9d3bb79ba0.png"},"e1a23eeb-bc3d-4bb0-baaa-5f0c006cd6b8":{"name":"life bar(full)","sourceUrl":null,"frameSize":{"x":162,"y":45},"frameCount":2,"looping":true,"frameDelay":10,"version":"DJ.jP_dt6AsRE.zT1y_iYNgjgBrnM_Ms","loadedFromSource":true,"saved":true,"sourceSize":{"x":162,"y":90},"rootRelativePath":"assets/e1a23eeb-bc3d-4bb0-baaa-5f0c006cd6b8.png"},"a09c76a9-876e-494d-9c14-073bdda22dda":{"name":"life bar(2)","sourceUrl":null,"frameSize":{"x":162,"y":45},"frameCount":3,"looping":true,"frameDelay":10,"version":"Y7khIeIPH0SND7HacK_EN4HygJ3TMACV","loadedFromSource":true,"saved":true,"sourceSize":{"x":162,"y":135},"rootRelativePath":"assets/a09c76a9-876e-494d-9c14-073bdda22dda.png"},"60a7960a-4cc8-4194-bc70-90c4e441db6b":{"name":"life bar(dead)","sourceUrl":null,"frameSize":{"x":162,"y":45},"frameCount":1,"looping":true,"frameDelay":12,"version":"GLditaJJy_cbI1jxcVfDIO2k.lnb5HwA","loadedFromSource":true,"saved":true,"sourceSize":{"x":162,"y":45},"rootRelativePath":"assets/60a7960a-4cc8-4194-bc70-90c4e441db6b.png"},"2bd0d9bf-52a0-4d79-b85b-5d16e9161df3":{"name":"life bar(1)","sourceUrl":null,"frameSize":{"x":172,"y":74},"frameCount":3,"looping":true,"frameDelay":4,"version":"O54Dlm85V65I.K8caRK3mM3S5zCbOMdZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":172,"y":222},"rootRelativePath":"assets/2bd0d9bf-52a0-4d79-b85b-5d16e9161df3.png"},"39780bb1-81e6-4fd2-a134-b1b8e987f7b9":{"name":"healthpotion9full)","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":5,"looping":true,"frameDelay":3,"version":"kJJhbeJbMNUCPl4KvTAMW2X6wmeJbii6","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/39780bb1-81e6-4fd2-a134-b1b8e987f7b9.png"},"027b60ce-af59-4224-881a-95a51ccd3a1e":{"name":"entencity","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":3,"version":"wMwXTbnCTWm3xo9Ohaci0u6_FSOiyLvI","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/027b60ce-af59-4224-881a-95a51ccd3a1e.png"},"aa669f65-dad2-42ca-828a-4c2f512c9eb0":{"name":"enemy","sourceUrl":null,"frameSize":{"x":384,"y":384},"frameCount":2,"looping":true,"frameDelay":5,"version":"FrjTzcn1t5rnzyPokaA7SgfQ2mI5rrfj","loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":768},"rootRelativePath":"assets/aa669f65-dad2-42ca-828a-4c2f512c9eb0.png"},"9b0474a2-db7f-428a-afa7-4a7e30ec5a12":{"name":"backgroundARC","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"TwZWnTWaEYo4ozNNHS62sUf6_ksAFCCp","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/9b0474a2-db7f-428a-afa7-4a7e30ec5a12.png"},"406d0289-8cdd-4df0-997f-2ace07171e38":{"name":"foregroundARC","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"KtXO.QZnTa4t_fsUSpsYd6Pi43LN0Adr","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/406d0289-8cdd-4df0-997f-2ace07171e38.png"},"cdada175-5db3-4d30-961c-a1e7ef55302e":{"name":"fireSkull","sourceUrl":null,"frameSize":{"x":63,"y":66},"frameCount":5,"looping":true,"frameDelay":3,"version":"QgHxDKr3mpp.19F8fYBxRopKok4nFe7L","loadedFromSource":true,"saved":true,"sourceSize":{"x":126,"y":198},"rootRelativePath":"assets/cdada175-5db3-4d30-961c-a1e7ef55302e.png"},"e5d54516-e991-44d7-a245-7d23fbc34571":{"name":"spikes","sourceUrl":null,"frameSize":{"x":97,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"VGw2JPe7ODg6a_9nTVNclyMP2P7GU4pG","loadedFromSource":true,"saved":true,"sourceSize":{"x":97,"y":40},"rootRelativePath":"assets/e5d54516-e991-44d7-a245-7d23fbc34571.png"},"a9ad4b39-db04-4506-a5c2-869613b0e812":{"name":"verticalSpikes","sourceUrl":null,"frameSize":{"x":40,"y":97},"frameCount":1,"looping":true,"frameDelay":12,"version":"mhkShq9oNSpokMzi0wiCyMPQxXHzwzSY","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":97},"rootRelativePath":"assets/a9ad4b39-db04-4506-a5c2-869613b0e812.png"},"2a10d124-82d2-4ee4-a06f-9d472c72e6a8":{"name":"skull(blasting)","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":6,"looping":true,"frameDelay":2,"version":"NAL0A9UHAHciCObgozg7sj4sFGIjV_si","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/2a10d124-82d2-4ee4-a06f-9d472c72e6a8.png"},"0db5fc22-21cb-4858-ace8-2d32725575d9":{"name":"chargingSpell","sourceUrl":null,"frameSize":{"x":319,"y":327},"frameCount":11,"looping":true,"frameDelay":2,"version":"STGVL7D3nzw13hMYM3ws7vIR5MsyDfVl","loadedFromSource":true,"saved":true,"sourceSize":{"x":1276,"y":981},"rootRelativePath":"assets/0db5fc22-21cb-4858-ace8-2d32725575d9.png"},"9265b1ca-b9e2-4fb5-ae27-1d5d47f48f13":{"name":"soulblast","sourceUrl":null,"frameSize":{"x":141,"y":81},"frameCount":4,"looping":true,"frameDelay":3,"version":"BPo2yDi85SsxjXbmNjBziAHTZq2jgLXT","loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":162},"rootRelativePath":"assets/9265b1ca-b9e2-4fb5-ae27-1d5d47f48f13.png"},"135be9bf-1b41-4daf-bb0d-b2d09011b798":{"name":"manaBar(fillingup)","sourceUrl":null,"frameSize":{"x":576,"y":201},"frameCount":13,"looping":true,"frameDelay":10,"version":"1Ot.bTCzDF3tzVmb7u7KA_ZOP0JXan56","loadedFromSource":true,"saved":true,"sourceSize":{"x":1152,"y":1407},"rootRelativePath":"assets/135be9bf-1b41-4daf-bb0d-b2d09011b798.png"},"892a26b5-9610-4ba4-99e3-c97d40a19de0":{"name":"turrets","sourceUrl":null,"frameSize":{"x":90,"y":76},"frameCount":6,"looping":true,"frameDelay":12,"version":"LVO_nLbbXnJJQQ0tUz.tPson6zad2okK","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":228},"rootRelativePath":"assets/892a26b5-9610-4ba4-99e3-c97d40a19de0.png"},"5c3ba269-7ebd-424f-ab05-5800741dad72":{"name":"turretBullet","sourceUrl":null,"frameSize":{"x":67,"y":24},"frameCount":1,"looping":true,"frameDelay":12,"version":"2TILfvEFFGM.JlWhau2hPqIPHqsvXDkh","loadedFromSource":true,"saved":true,"sourceSize":{"x":67,"y":24},"rootRelativePath":"assets/5c3ba269-7ebd-424f-ab05-5800741dad72.png"},"ebb17a24-b4b1-42f8-a5df-2fe9f3352348":{"name":"portal","sourceUrl":null,"frameSize":{"x":232,"y":188},"frameCount":6,"looping":true,"frameDelay":3,"version":"_aHB0S2GRoqOuneiM8fA5Fb_QMvCcxG5","loadedFromSource":true,"saved":true,"sourceSize":{"x":464,"y":564},"rootRelativePath":"assets/ebb17a24-b4b1-42f8-a5df-2fe9f3352348.png"},"60db77cb-755a-4bbd-bcee-acb001b7dd38":{"name":"boss","sourceUrl":null,"frameSize":{"x":475,"y":464},"frameCount":2,"looping":true,"frameDelay":15,"version":"XipRQo8PxKx_pvYBe9Gs9oXCS3T3J_A4","loadedFromSource":true,"saved":true,"sourceSize":{"x":475,"y":928},"rootRelativePath":"assets/60db77cb-755a-4bbd-bcee-acb001b7dd38.png"},"2c488873-acd5-46a4-86fb-5ff0a2aa1bc2":{"name":"2ndphaseBoss","sourceUrl":null,"frameSize":{"x":475,"y":464},"frameCount":2,"looping":true,"frameDelay":3,"version":"xZuQSVc2YEs_2sHdK3S5Gh6k0HBlHb8m","loadedFromSource":true,"saved":true,"sourceSize":{"x":475,"y":928},"rootRelativePath":"assets/2c488873-acd5-46a4-86fb-5ff0a2aa1bc2.png"},"6edc84e7-838b-43eb-abf2-1f07f7602664":{"name":"righthand(goesonleft)","sourceUrl":null,"frameSize":{"x":96,"y":77},"frameCount":7,"looping":true,"frameDelay":4,"version":"nRolUPYSbDlnFY2pGWAEI_hpa2PU6U06","loadedFromSource":true,"saved":true,"sourceSize":{"x":192,"y":308},"rootRelativePath":"assets/6edc84e7-838b-43eb-abf2-1f07f7602664.png"},"b7a28284-133d-48d5-a689-18be9235c648":{"name":"2ndphaserRIGHTHAND","sourceUrl":null,"frameSize":{"x":98,"y":94},"frameCount":6,"looping":true,"frameDelay":3,"version":"Z99fd3qrdt5K8Yig0T92JBXgq.814ba7","loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":282},"rootRelativePath":"assets/b7a28284-133d-48d5-a689-18be9235c648.png"},"1ecd57da-9472-4f3d-8659-dd072251b263":{"name":"2ndphaseLEFtHAND","sourceUrl":null,"frameSize":{"x":98,"y":94},"frameCount":6,"looping":true,"frameDelay":3,"version":"1CCQhm3I81ex6kd1V_N_F2RJ2Rm3QbGW","loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":282},"rootRelativePath":"assets/1ecd57da-9472-4f3d-8659-dd072251b263.png"},"1e72fa4e-33c8-4ffa-95d1-447b57b4564f":{"name":"lefthand(goes on right","sourceUrl":null,"frameSize":{"x":96,"y":77},"frameCount":7,"looping":true,"frameDelay":4,"version":"Ndt4HyKOCw2SF9x4ygcTfvW0MY7tS1Bf","loadedFromSource":true,"saved":true,"sourceSize":{"x":192,"y":308},"rootRelativePath":"assets/1e72fa4e-33c8-4ffa-95d1-447b57b4564f.png"},"4c9145e8-36b7-4841-a9f2-0b1f0c8fe472":{"name":"bosslifebar","sourceUrl":null,"frameSize":{"x":492,"y":60},"frameCount":13,"looping":true,"frameDelay":12,"version":"M2nlWsmjYctO29gWZvbDXrTLnkfOrRC_","loadedFromSource":true,"saved":true,"sourceSize":{"x":492,"y":780},"rootRelativePath":"assets/4c9145e8-36b7-4841-a9f2-0b1f0c8fe472.png"},"d5c6b06c-c332-4ed9-9b46-4220264c9e5f":{"name":"map","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"l4QFDTehmjmTuOGlm9UpWpW0hLGMW3wq","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/d5c6b06c-c332-4ed9-9b46-4220264c9e5f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var back = createSprite(200, 200);
var tention = createSprite(200, 200);
//x: -1300 y: 1960
var sam = createSprite(-1400, 1960);
var soulblast = createSprite(sam.x, sam.y);
soulblast.depth = -7;
var map = createSprite(-1250, 1810);
var Barc1 = createSprite(-1100, 1850);
var Farc1 = createSprite(Barc1.x - 60, Barc1.y);
var spike1 = createSprite(-855, 2050);
var spike2 = createSprite(-1450, 1200);
var spike3 = createSprite(-810, 1200);
var spike4 = createSprite(-1800, 600);
var spike5 = createSprite(-500, 600);
var spike6 = createSprite(0, 420);
var spike7 = createSprite(2000, 1800);
var spike8 = createSprite(2000, 1200);
var spikes = createGroup();
var block1 = createSprite(-1530, 2000);
var block2 = createSprite(-1145, 2000);
var block3 = createSprite(-580, 2000);
var block4 = createSprite(-740, 1000);
var block5 = createSprite(-1520, 1000);
var block6 = createSprite(-1870, 1550);
var block7 = createSprite(-250, 2000);
var block8 = createSprite(-260, 800);
var block9 = createSprite(2200, 1900);
var block10 = createSprite(250, 2300);
var block11 = createSprite(1000, 2300);
var block12 = createSprite(1800, 2300);
var block13 = createSprite(2200, 1150);
var block14 = createSprite(2200, 350);
var block15 = createSprite(1600, 1500);
var block16 = createSprite(700, 1500);
var block17 = createSprite(1300, 800);
var block18 = createSprite(400, 800);
var block19 = createSprite(-1090, 0);
var block20 = createSprite(1200, 0);
var block21 = createSprite(0, 0);
var block22 = createSprite(-2000, -1000);
var block23 = createSprite(2400, -900);
var block24 = createSprite(200, -2300);
var block32 = createSprite(-1150, 500);
var Bblocks = createGroup();
var lifebar = createSprite(sam.x - 120, sam.y - 200);
var manabar = createSprite(sam.x - 140, sam.y - 190);
var manaAspect = createSprite(sam.x, sam.y);
var skull1 = createSprite(-1500, 400);
var skull2 = createSprite(-800, 700);
var skull3 = createSprite(-800, 400);
var skull4 = createSprite(-1500, 700);
var skull5 = createSprite(500, 1900);
var skull6 = createSprite(1500, 1900);
var skull7 = createSprite(1000, 1150);
var skull8 = createSprite(400, 400);
var skull9 = createSprite(1400, 400);
var enemy1 = createSprite(-660, 1979);
var enemy2 = createSprite(900, 400);
var enemy3 = createSprite(600, 1300);
var enemy4 = createSprite(1500, 1300);
var enemy5 = createSprite(400, 2000);
var enemy6 = createSprite(1700, 2000);
var enemy7 = createSprite(900, 2000);
var turret1 = createSprite(-250, 1700);
var turret2 = createSprite(-250, 1200);
var potion1 = createSprite(-460, 1989);
var potion2 = createSprite(-1150, 100);
var potion3 = createSprite(200, 420);
var turretbullet = createSprite(200, 200);
var portal = createSprite(300, -800);
turretbullet.depth = -7;
var boss = createSprite(0, -1100);
var lefthand = createSprite(boss.x + 350, boss.y + 200);
var righthand = createSprite(boss.x - 350, boss.y + 200);
var block25 = createSprite(0, -500);
var Bosslifebar = createSprite(200, 200);
var potion4 = createSprite(-1000, -900);
var potion5 = createSprite(-500, -900);
var potion6 = createSprite(1000, -900);
var potion7 = createSprite(500, -900);
potion4.depth = -7;
potion5.depth = -7;
potion6.depth = -7;
potion7.depth = -7;
boss.depth = -7;
lefthand.depth = -7;
righthand.depth = -7;
block25.depth = -7;
// variables
var bossHP = 12;
var bosspresent = false;
//16 enemyamount
var enemycount = 16;
var manaAmount = 0;
var flying = false;
var playeralive = true;
var playerlives = 3;
var playerfacing = 1;
var start = false;
var manas = false;
var blockdis = createGroup();
var bulletshot = 10;
var deathcount = 0;
blockdis.add(boss);
draw();
function draw() {
  drawSprites();
  if (start === false) {
    startingUp();
    sam.pause();
  } else {
    sam.play();
    //camera settings
    camera.zoom = 1;
    camera.x = sam.x + 10;
    camera.y = sam.y - 40;
    //-200
    if (sam.y < -200) {
      //o.4
      camera.zoom = 0.4;
      if (enemycount > 0) {
        almostending();
      } else {
        portalteleport();
      }
    }
  }
  restart();
  map.setAnimation("map");
  map.depth = 4;
  // make a character
  playerControls();
  //spikes
  spikeDmg(spike1, 4, 1, false);
  spikeDmg(spike2, 6, -1, false);
  spikeDmg(spike3, 6, -1, false);
  spikeDmg(spike4, 7, 1, true);
  spikeDmg(spike5, 7, -1, true);
  spikeDmg(spike6, 4, 1, true);
  spikeDmg(spike7, 7, -1, true);
  spikeDmg(spike8, 4, -1, true);
  //decorative arcs
  arcs(Barc1, true);
  arcs(Farc1, false);
  //the blocks of the map
  blocks(block1, false, 5);
  blocks(block2, false, 5);
  blocks(block3, false, 5);
  blocks(block4, false, 9);
  blocks(block5, false, 9);
  blocks(block6, true, 10);
  blocks(block7, true, 10);
  blocks(block8, true, 15);
  blocks(block9, true, 10);
  blocks(block10, false, 10);
  blocks(block11, false, 10);
  blocks(block12, false, 10);
  blocks(block13, true, 10);
  blocks(block14, true, 10);
  blocks(block15, false, 12);
  blocks(block16, false, 12);
  blocks(block17, false, 12);
  blocks(block18, false, 12);
  blocks(block19, false, 18);
  blocks(block20, false, 18);
  blocks(block21, false, 18);
  blocks(block22, true, 20);
  blocks(block23, true, 22);
  blocks(block24, false, 50);
  blocks(block32, false, 3);
  //background
  back.setAnimation("cavebackground");
  back.scale = 20;
  //flying enemy
  flyingenemy(skull1);
  flyingenemy(skull2);
  flyingenemy(skull3);
  flyingenemy(skull4);
  flyingenemy(skull5);
  flyingenemy(skull6);
  flyingenemy(skull7);
  flyingenemy(skull8);
  flyingenemy(skull9);
  // make grunts
  gruntFollowing(enemy1);
  gruntFollowing(enemy2);
  gruntFollowing(enemy3);
  gruntFollowing(enemy4);
  gruntFollowing(enemy5);
  gruntFollowing(enemy6);
  gruntFollowing(enemy7);
  //turrets
  turretF(turret1, false);
  turretF(turret2, true);
  //potion
  healing(potion1);
  healing(potion2);
  healing(potion3);
  //lifebar
  if (sam.y < -200) {
    hearts(20, -300, 2);
    mana(30, -300, 1.7);
    bossbar();
  } else {
    hearts(60, 200, 0.7);
    mana(70, 190, 0.4);
  }
  // make a boss
  bossBattle();
}
function startingUp() {
  fill("red");
  textSize(20);
  textFont("Comic Sans");
  text("CALAVERA STROLL", sam.x - 95, sam.y - 100);
  textSize(7);
  fill("white");
  text("controls: use A & D to move left and right and hold space to float", sam.x - 95, sam.y - 85);
  stroke("blue");
  text("hold down S to charge your mana, with full mana you can ", sam.x - 95, sam.y - 75);
  text("blast off after floating or press W to shoot a soul blast(costs mana)", sam.x - 95, sam.y - 65);
  text("if you press space and then hold space, you'll end up flying :D", sam.x - 95, sam.y - 55);
  stroke("red");
  text("turrets dont die D:, but as you kill more, the lag will die too :D", sam.x - 95, sam.y - 45);
  textSize(12);
  fill("white");
  text("press any key to start", sam.x - 53, sam.y - 30);
  camera.zoom = 2;
  camera.x = sam.x;
  camera.y = sam.y - 80;
}
function playerControls() {
  if (playeralive === true) {
    if (keyDown("space")) {
      sam.setAnimation("powering");
      sam.y = sam.y - 19;
      start = true;
    }  else if ((keyDown("d")) || keyDown("right")) {
      start = true;
      if (flying === false) {
        sam.setAnimation("rollingskull");
        sam.x = sam.x + 10;
        sam.mirrorX(1);
        playerfacing = 1;
      }
    } else if ((keyDown("a")) || keyDown("left")) {
      start = true;
      if (flying === false) {
        sam.setAnimation("rollingskull");
        sam.x = sam.x - 10;
        sam.mirrorX(-1);
        playerfacing = -1;
      }
    } else if (sam.velocityX === 15 || sam.velocityX === -15) {
      sam.setAnimation("blastingOff");
      flying = true;
    } else if ((keyDown("s")) || keyDown("down")) {
      start = true;
      manaAmount = manaAmount + 1;
      sam.setAnimation("powering");
      manaAspect.setAnimation("chargingSpell");
      manaAspect.scale = 0.3;
      manaAspect.x = sam.x;
      manaAspect.y = sam.y;
      manaAspect.depth = 7;
    } else if ((keyDown("w")) || keyDown("up")) {
      start = true;
      if (manas === true) {
        if (playerfacing === -1) {
          soulblast = createSprite(sam.x - 20, sam.y + randomNumber(-3, 3));
          soulblast.velocityX = -20;
          soulblast.mirrorX(-1);
        } else {
          soulblast = createSprite(sam.x + 20, sam.y + randomNumber(-3, 3));
          soulblast.velocityX = 20;
          soulblast.mirrorX(1);
        }
        sam.setAnimation("skull(blasting)");
        soulblast.setAnimation("soulblast");
        soulblast.depth = 7;
        soulblast.lifetime = 18;
        soulblast.scale = 0.7;
        manaAmount = 0;
      }
    } else {
      manaAspect.depth = -7;
      sam.setAnimation("stillskull");
      sam.velocityY = 13;
    }
    if (keyWentUp("space")) {
      if (manas === true) {
        if (flying === true) {
          flying = false;
        } else {
          flying = true;
        }
        if (playerfacing === -1) {
          sam.setAnimation("blastingOff");
          sam.velocityX = sam.velocityX - 15;
          sam.velocityY = 0;
        }
        if (playerfacing === 1) {
          sam.setAnimation("blastingOff");
          sam.velocityX = sam.velocityX + 15;
          sam.velocityY = 0;
        }
      }
    }
  }
  if (sam.velocityX >= 16 || sam.velocityX <= -16) {
    sam.velocityX = 0;
    sam.velocityY = 13;
  }
  blockdis.add(sam);
  sam.scale = 0.5;
  sam.setCollider("circle");
  sam.depth = 5;
}
function hearts(xaxis, yaxis, scale) {
  if (enemycount > 0) {
    if (playerlives <= 1) {
      tention.scale = 5;
      tention.setAnimation("entencity");
      tention.x = sam.x;
      tention.y = sam.y;
      tention.depth = 5;
    } else {
      tention.depth = -5;
    }
  } else {
    tention.depth = -5;
  }
  if (playerlives === 3) {
    lifebar.setAnimation("life bar(full)");
  } else if ((playerlives === 2)) {
    lifebar.setAnimation("life bar(2)");
  } else if (playerlives === 1) {
    lifebar.setAnimation("life bar(1)");
  } else if (playerlives <= 0) {
    lifebar.setAnimation("life bar(dead)");
    sam.setAnimation("deadSkull");
    sam.setVelocity(0, 3);
    playeralive = false;
    stroke("red");
    if (sam.y < -200) {
      textSize(40);
      text("GIT GUD", sam.x - 50, sam.y - 100);
      text("press r or space to restart, no worries...", sam.x - 100, sam.y - 70);
      text("youll spawn near the boss :]", sam.x - 70, sam.y - 40);
    } else {
      textSize(20);
      text("GIT GUD", sam.x - 50, sam.y - 80);
      text("press r or space to restart, no worries...", sam.x - 70, sam.y - 60);
      text("enemies wont respawn", sam.x - 70, sam.y - 40);
    }
  }
  lifebar.scale = scale;
  lifebar.x = sam.x -xaxis;
  lifebar.y = sam.y - yaxis;
}
function healing(potionnum) {
  blockdis.add(potionnum);
  potionnum.depth = 3;
  potionnum.setAnimation("healthpotion9full)");
  potionnum.setCollider("rectangle");
  potionnum.velocityY = 9;
  if (potionnum.overlap(sam)) {
    if (playeralive === true) {
      potionnum.destroy();
      playerlives = 3;
    }
  }
}
function mana(xaxis, yaxis, scale) {
  manabar.setAnimation("manaBar(fillingup)");
  manabar.pause();
  manabar.scale = scale;
  manabar.x = sam.x - xaxis;
  manabar.y = sam.y - yaxis;
  if (manaAmount === 0) {
    manabar.setFrame(1);
    manas = false;
  }
  if (manaAmount === 1) {
    manabar.setFrame(2);
  }
  if (manaAmount === 2) {
    manabar.setFrame(3);
  }
  if (manaAmount === 3) {
    manabar.setFrame(4);
  }
  if (manaAmount === 4) {
    manabar.setFrame(5);
  }
  if (manaAmount === 5) {
    manabar.setFrame(6);
  }
  if (manaAmount === 6) {
    manabar.setFrame(7);
  }
  if (manaAmount === 7) {
    manabar.setFrame(8);
  }
  if (manaAmount === 8) {
    manabar.setFrame(9);
  }
  if (manaAmount === 9) {
    manabar.setFrame(10);
  }
  if (manaAmount === 10) {
    manabar.setFrame(11);
  }
  if (manaAmount === 11) {
    manabar.setFrame(12);
  }
  if (manaAmount >= 12) {
    manabar.setFrame(13);
    manas = true;
  }
}
function gruntFollowing(grunt) {
  grunt.setAnimation("enemy");
  blockdis.add(grunt);
  grunt.setCollider("circle");
  grunt.collide(sam);
  if ((sam.x >= grunt.x - 200 && sam.x <= grunt.x || sam.x <= (grunt.x + 200) && sam.x >= grunt.x) && (sam.y >= grunt.y - 200 && sam.y <= grunt.y || sam.y <= (grunt.y + 200) && sam.y > grunt.y)) {
    if (grunt.x > sam.x) {
      grunt.velocityX = -5;
      grunt.mirrorX(1);
    } else {
      grunt.velocityX = 5;
      grunt.mirrorX(-1);
    }
  }
  if (grunt.collide(sam) || sam.collide(grunt)) {
    playerlives = playerlives - 1;
    if (playerfacing === 1) {
      sam.x = sam.x - 50;
      grunt.x = grunt.x + 50;
    }
    if (playerfacing === -1) {
      sam.x = sam.x + 50;
      grunt.x = grunt.x - 50;
    }
  }
  if (soulblast.collide(grunt) || grunt.collide(soulblast)) {
    grunt.destroy();
    soulblast.destroy();
    enemycount = enemycount - 1;
  }
  grunt.depth = 5;
  grunt.velocityY = 13;
  grunt.scale = 0.3;
}
function flyingenemy(grunt) {
  blockdis.add(grunt);
  grunt.setAnimation("fireSkull");
  grunt.setCollider("rectangle");
  //enemy range
  if ((sam.x >= grunt.x - 400 && sam.x <= grunt.x || sam.x <= (grunt.x + 400) && sam.x >= grunt.x) && (sam.y >= grunt.y - 400 && sam.y <= grunt.y || sam.y <= (grunt.y + 400) && sam.y > grunt.y)) {
    //enemy speed
    if (grunt.x > sam.x) {
      grunt.velocityX = -4;
      grunt.mirrorX(1);
    } else {
      grunt.velocityX = 4;
      grunt.mirrorX(-1);
    }
    if (grunt.y > sam.y) {
      grunt.velocityY = -4;
    } else {
      grunt.velocityY = 4;
    }
  }
  if (grunt.collide(sam) || sam.collide(grunt)) {
    playerlives = playerlives - 1;
    if (playerfacing === 1) {
      sam.x = sam.x - 50;
      grunt.x = grunt.x + 50;
    }
    if (playerfacing === -1) {
      sam.x = sam.x + 50;
      grunt.x = grunt.x - 50;
    }
  }
  if (soulblast.collide(grunt) || grunt.collide(soulblast)) {
    grunt.destroy();
    soulblast.destroy();
    enemycount = enemycount - 1;
  }
  grunt.depth = 5;
  grunt.scale = 1;
}
function spikeDmg(spikenum, scale, mirrorY, mirrorX) {
  spikes.add(spikenum);
  spikenum.setCollider("rectangle");
  if (mirrorX === true) {
    spikenum.setAnimation("verticalSpikes");
    spikenum.mirrorX(mirrorY);
  } else {
    spikenum.setAnimation("spikes");
    spikenum.mirrorY(mirrorY);
  }
  spikenum.depth = 4;
  spikenum.scale = scale;
  if (playeralive === true) {
    if (sam.isTouching(spikenum) || spikenum.isTouching(sam)) {
      playerlives = playerlives - 1;
      sam.y = sam.y - 100;
    }
  } else {
    spikenum.displace(sam);
  }
}
function blocks(blocknum, vblock, scale) {
  if (vblock === true) {
    blocknum.setAnimation("verticalBlock");
    blocknum.setCollider("rectangle", 0, 0, 29, 81);
  } else {
    blocknum.setAnimation("block");
    blocknum.setCollider("rectangle", 0, 0, 81, 29);
  }
  blocknum.depth = 4;
  blocknum.scale = scale;
  blocknum.displace(blockdis);
  Bblocks.add(blocknum);
}
function arcs(arcnum, Barc) {
  if (Barc === true) {
    arcnum.setAnimation("backgroundARC");
    arcnum.depth = 4;
  } else {
    arcnum.setAnimation("foregroundARC");
    arcnum.depth = 7;
  }
  arcnum.scale = 3;
}
function turretF(turretnum, morrorY) {
  blockdis.add(turretnum);
  turretnum.setAnimation("turrets");
  turretnum.scale = 0.6;
  turretnum.depth = 5;
  turretnum.setCollider("rectangle");
  turretnum.displace(sam);
  if (morrorY === true) {
    turretnum.mirrorY(-1);
  } else {
    turretnum.mirrorY(1);
  }
  if ((sam.x >= turretnum.x - 200 && sam.x <= (turretnum.x) || sam.x <= (turretnum.x + 200) && sam.x >= turretnum.x) && (sam.y >= (turretnum.y - 200) && sam.y <= (turretnum.y) || sam.y <= (turretnum.y + 200) && sam.y > turretnum.y)) {
    if (bulletshot === 10) {
      bulletshot = 0;
      if (turretnum.x > sam.x) {
        turretbullet = createSprite(turretnum.x - 30, turretnum.y);
        blockdis.add(turretbullet);
        turretbullet.setAnimation("turretBullet");
        turretbullet.setCollider("rectangle");
        turretbullet.scale = 0.5;
        turretbullet.depth = 7;
        turretbullet.velocityX = -8;
        turretnum.mirrorX(-1);
        turretbullet.lifetime = 30;
      } else {
        turretbullet = createSprite(turretnum.x + 30, turretnum.y);
        blockdis.add(turretbullet);
        turretbullet.setCollider("rectangle");
        turretbullet.scale = 0.5;
        turretbullet.setAnimation("turretBullet");
        turretbullet.depth = 7;
        turretbullet.velocityX = 8;
        turretnum.mirrorX(1);
        turretbullet.lifetime = 30;
      }
    } else {
      bulletshot = bulletshot + 0.5;
    }
  }
  if (turretbullet.collide(sam) || sam.collide(turretbullet)) {
    playerlives = playerlives - 1;
    if (playerfacing === 1) {
      sam.x = sam.x - 50;
      turretbullet.destroy();
    }
    if (playerfacing === -1) {
      sam.x = sam.x + 50;
      turretbullet.destroy();
    }
  }
}
function almostending() {
  textSize(50);
  textFont("Andale Mono");
  text("Hey there...", sam.x - 100, sam.y - 320);
  text("Looks like you still havent killed...", sam.x - 400, sam.y - 220);
  text(enemycount + " enemies...", sam.x - 100, sam.y - 140);
  text("if you want to fight the boss...kill the rest", sam.x - 400, sam.y - 50);
  text("it'll also kill the lag", sam.x - 400, sam.y + 40);
}
function portalteleport() {
  portal.setAnimation("portal");
  portal.setCollider("circle", 0, 0, 40);
  portal.scale = 5;
  if (sam.collide(portal) || portal.collide(sam)) {
    bossbattle();
  }
}
function bossbattle() {
  destroyDuringboss();
  bosspresent = true;
  boss.depth = 5;
  lefthand.depth = 7;
  righthand.depth = 7;
  block25.depth = 7;
  sam.depth = 7;
  sam.x = 0;
  sam.y = -700;
  boss.y = -1100;
  //make the boss here V
}
function destroyDuringboss() {
  spike1.destroy();
  spike2.destroy();
  spike3.destroy();
  spike4.destroy();
  spike5.destroy();
  spike6.destroy();
  spike7.destroy();
  spike8.destroy();
  turret1.destroy();
  turret2.destroy();
  bulletshot = 11;
  map.destroy();
  Barc1.destroy();
  Farc1.destroy();
  portal.destroy();
  block1.destroy();
  block2.destroy();
  block3.destroy();
  block4.destroy();
  block5.destroy();
  block6.destroy();
  block7.destroy();
  block8.destroy();
  block9.destroy();
  block10.destroy();
  block11.destroy();
  block12.destroy();
  block13.destroy();
  block14.destroy();
  block15.destroy();
  block16.destroy();
  block17.destroy();
  block18.destroy();
  block19.destroy();
  block20.destroy();
  block21.destroy();
  block22.destroy();
  block23.destroy();
  block24.destroy();
  block32.destroy();
}
function bossbar() {
  if (bosspresent === true) {
    Bosslifebar.setAnimation("bosslifebar");
    Bosslifebar.pause();
    Bosslifebar.x = sam.x;
    Bosslifebar.y = sam.y - 400;
  }
  if (bossHP > 11) {
    Bosslifebar.setFrame(0);
  }
  if (bossHP === 11) {
    Bosslifebar.setFrame(1);
  }
  if (bossHP === 10) {
    Bosslifebar.setFrame(2);
  }
  if (bossHP === 9) {
    Bosslifebar.setFrame(3);
  }
  if (bossHP === 8) {
    Bosslifebar.setFrame(4);
  }
  if (bossHP === 7) {
    Bosslifebar.setFrame(5);
  }
  if (bossHP === 6) {
    Bosslifebar.setFrame(6);
  }
  if (bossHP === 5) {
    Bosslifebar.setFrame(7);
  }
  if (bossHP === 4) {
    Bosslifebar.setFrame(8);
  }
  if (bossHP === 3) {
    Bosslifebar.setFrame(9);
  }
  if (bossHP === 2) {
    Bosslifebar.setFrame(10);
  }
  if (bossHP === 1) {
    Bosslifebar.setFrame(11);
  }
  if (bossHP === 0) {
    Bosslifebar.setFrame(12);
  }
  if (soulblast.collide(boss) || boss.collide(soulblast)) {
    bossHP = bossHP - 1;
    soulblast.destroy();
  }
}
function bossBattle() {
  if (bosspresent === true) {
    if (bossHP <= 6) {
      righthand.setAnimation("2ndphaserRIGHTHAND");
      lefthand.setAnimation("2ndphaseLEFtHAND");
      boss.setAnimation("2ndphaseBoss");
    } else {
      boss.setAnimation("boss");
      lefthand.setAnimation("lefthand(goes on right");
      righthand.setAnimation("righthand(goesonleft)");
    }
    lefthand.scale = 3;
    righthand.scale = 3;
    lefthand.setCollider("circle", 0, 0, 35);
    righthand.setCollider("circle", 0, 0, 35);
    boss.setCollider("rectangle", 0, 0, 400, 450);
    if (bossHP === 0) {
      boss.destroy();
      lefthand.destroy();
      righthand.destroy();
      camera.zoom = 1;
      textSize(20);
      stroke("lightBlue");
      text("YOU WON!!!!!! wow didnt expect that", sam.x - 140, sam.y - 50);
      if (deathcount > 0) {
        text("but I did expect you to die " + deathcount + " times! GIT GUD!!!", sam.x - 140, sam.y - 30);
      } else {
        textSize(30);
        text("...You are truly the greatest player...", sam.x - 140, sam.y - 30);
      }
    }
    blocks(block25, false, 50);
    healing(potion4);
    healing(potion5);
    healing(potion6);
    healing(potion7);
    potion4.depth = 7;
    potion5.depth = 7;
    potion6.depth = 7;
    potion7.depth = 7;
    if ((sam.x >= righthand.x - 600 && sam.x <= (righthand.x) || sam.x <= (righthand.x + 600) && sam.x >= righthand.x) && (sam.y >= righthand.y - 600 && sam.y <= (righthand.y) || sam.y <= (righthand.y + 600) && sam.y > righthand.y)) {
      righthand.rotateToDirection = sam + 90;
      if (righthand.x > sam.x) {
        if (bossHP <= 6) {
          righthand.velocityX = -8;
        } else {
          righthand.velocityX = -5;
        }
      } else {
        if (bossHP <= 6) {
          righthand.velocityX = 8;
        } else {
          righthand.velocityX = 5;
        }
      }
      if (righthand.y > sam.y) {
        if (bossHP <= 6) {
          righthand.velocityY = -8;
        } else {
          righthand.velocityY = -5;
        }
      } else {
        if (bossHP <= 6) {
          righthand.velocityY = 8;
        } else {
          righthand.velocityY = 5;
        }
      }
    } else {
      righthand.x = boss.x - 350;
      righthand.y = boss.y + 200;
      boss.x = sam.x - 50;
    }
    if ((sam.x >= lefthand.x - 600 && sam.x <= (lefthand.x) || sam.x <= (lefthand.x + 600) && sam.x >= lefthand.x) && (sam.y >= lefthand.y - 600 && sam.y <= (lefthand.y) || sam.y <= (lefthand.y + 600) && sam.y > lefthand.y)) {
      lefthand.rotateToDirection = sam + 90;
      if (lefthand.x > sam.x) {
        if (bossHP <= 6) {
          lefthand.velocityX = -8;
        } else {
          lefthand.velocityX = -5;
        }
      } else {
        if (bossHP <= 6) {
          lefthand.velocityX = 8;
        } else {
          lefthand.velocityX = 5;
        }
      }
      if (lefthand.y > sam.y) {
        if (bossHP <= 6) {
          lefthand.velocityY = -8;
        } else {
          lefthand.velocityY = -5;
        }
      } else {
        if (bossHP <= 6) {
          lefthand.velocityY = 8;
        } else {
          lefthand.velocityY = 5;
        }
      }
    } else {
      lefthand.x = boss.x + 350;
      lefthand.y = boss.y + 200;
      boss.x = sam.x + 50;
    }
    if (lefthand.collide(sam) || sam.collide(lefthand)) {
      playerlives = playerlives - 1;
      if (playerfacing === 1) {
        sam.x = sam.x - 100;
      }
      if (playerfacing === -1) {
        sam.x = sam.x + 100;
      }
    }
    if (righthand.collide(sam) || sam.collide(righthand)) {
      playerlives = playerlives - 1;
      if (playerfacing === 1) {
        sam.x = sam.x - 100;
      }
      if (playerfacing === -1) {
        sam.x = sam.x + 100;
      }
    }
  }
}
function restart() {
  if (keyDown("r") || keyDown("space")) {
    if (playeralive === false) {
      sam.destroy();
      playerlives = 3;
      deathcount = deathcount + 1;
      if (bosspresent === true) {
        sam = createSprite(randomNumber(-700, 700), -700);
        bossHP = 12;
      } else {
        sam = createSprite(-1400, 1940);
      }
      playeralive = true;
      playerControls();
    }
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
