if (document.getElementById("yandexmap"))
{
  ymaps.ready(initMap);
}

function initMap ()
{
  let map = new ymaps.Map("yandexmap", {
    center: [56.726805, 37.146316],
    zoom: 16
    });
  let marker = new ymaps.Placemark([56.726805, 37.146316], {
    hintContent: 'Расположение',
    balloonContent: 'Место проживания'
    });
  map.geoObjects.add(marker);
  var layer = map.layers.get(0).get(0);
  waitForTilesLoad(layer).then(function() {
            document.querySelector('.preloader').classList.add("preloader-remove");
        });
}

function getTileContainer(layer) {
    for (var k in layer) {
        if (layer.hasOwnProperty(k)) {
            if (
                layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
                || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
            ) {
                return layer[k];
            }
        }
    }
    return null;
}

function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
        var tc = getTileContainer(layer), readyAll = true;
        tc.tiles.each(function (tile, number) {
            if (!tile.isReady()) {
                readyAll = false;
            }
        });
        if (readyAll) {
            resolve();
        } else {
            tc.events.once("ready", function() {
                resolve();
            });
        }
    });
}