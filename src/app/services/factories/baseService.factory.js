(function(){

    angular
        .module('app')
        .factory('baseService', baseService);

    baseService.$inject = ['ajaxService', 'socketsService'];

    function baseService(ajaxService, socketsService){
        let host = 'http://' + location.host;
        let user = {};

        let data = {
            getPolitica         : getPolitica,
            getProducto         : getProducto,
            getPromociones      : getPromociones,
            postPolitica        : postPolitica,
            postProducto        : postProducto,
            postPromociones     : postPromociones,
            getLegales		    : getLegales,
            postLegales		    : postLegales,
            getTipoProductos    : getTipoProductos,
            postOfertaPromocion : postOfertaPromocion,
            postPais            : postPais,
            postProvincia       : postProvincia,
            postLocalidad       : postLocalidad,
            updateLocalidad     : updateLocalidad,
            postPartido         : postPartido,
            postGrupo           : postGrupo,
            upsertGrupo         : upsertGrupo,
            postZonaComercial   : postZonaComercial,
            deleteOfertaPromos  : deleteOfertaPromos,
            upsertPlanes        : upsertPlanes,
            selectPlanesProd    : selectPlanesProd,
            login               : login,
            anularPromos        : anularPromos,
            anularLegales       : anularLegales,
            anularProductos     : anularProductos,
            anularPolitica      : anularPolitica,
            aceptarLegales      : aceptarLegales,
            selectPromosProd    : selectPromosProd,
            importPromos        : importPromos
        };

        return data;

        /******** Publics Functions ********/

        function importPromos(promos, successCallback, errorCallback){
            let obj = {
				url: host + '/api/importPromos',
				method: 'POST',
				data: promos,
				happyResponse: (res) => {
                    successCallback(res);
				},
				unhappyResponse: (err) => {
                    errorCallback(err);
				}
			};
			ajaxService.getData(obj);
        }

        function selectPlanesProd(politicas, successCallback, errorCallback){
			let obj = {
				url: host + '/api/selectPlanesProd',
				method: 'POST',
				data: politicas,
				happyResponse: (res) => {
                    successCallback(res);
				},
				unhappyResponse: (err) => {
                    errorCallback(err);
				}
			};
			ajaxService.getData(obj);
        }
        
        function selectPromosProd(promos, successCallback, errorCallback){
			let obj = {
				url: host + '/api/selectPromosProd',
				method: 'POST',
				data: promos,
				happyResponse: (res) => {
                    successCallback(res);
				},
				unhappyResponse: (err) => {
                    errorCallback(err);
				}
			};
			ajaxService.getData(obj);
		}

        function getPolitica(callback){
            let obj = {
                url: host + '/api/abmpolitica',
                method: 'GET',
                happyResponse: (res) => {
                    callback(res);
                },
                unhappyResponse: (err) => {

                }
            };
            ajaxService.getData(obj);
        }

        function getProducto(callback){
            let obj = {
                url: host + '/api/productos',
                method: 'GET',
                happyResponse: (res) => {
                	callback(res);
                },
                unhappyResponse: (err) => {
                }
            };
            ajaxService.getData(obj);
        }

        function getLegales(callback){
            let obj = {
                url: host + '/api/legales',
                method: 'GET',
                happyResponse: (res) => {
                	callback(res);
                },
                unhappyResponse: (err) => {
                }
            };
            ajaxService.getData(obj);
        }

        function getPromociones(callback){
            let obj = {
                url: host + '/api/promociones',
                method: 'GET',
                happyResponse: (res) => {
                    callback(res);
                },
                unhappyResponse: (err) => {
                }
            };
            ajaxService.getData(obj);
        }

        function getTipoProductos(callback){
            let obj = {
                url: host + '/api/tipoProductos',
                method : 'GET',
                happyResponse: (res) => {
                    callback(res);
                },
                unhappyResponse: (err) => {
                }
            };
            ajaxService.getData(obj);
        }

        function postPolitica(politica, successCallback, errorCallback){
			let obj = {
				url: host + '/api/abmPolitica',
				method: 'POST',
				data: politica,
				happyResponse: (res) => {
                    successCallback(res);
				},
				unhappyResponse: (err) => {
                    errorCallback(err);
				}
			};
			ajaxService.getData(obj);
		}

		function postProducto(producto, successCallback , errorCallback){
			let obj = {
				url: host + '/api/abmProducto',
				method: 'POST',
				data : producto,
				happyResponse: (res) => {
                    successCallback(res);
				},
				unhappyResponse: (err) => {
				    errorCallback(err);
                }
			};
			ajaxService.getData(obj);
		}

    function anularProductos(productos , successCallback , errorCallback){
      let obj = {
				url: host + '/api/anularProductos',
				method: 'POST',
				data : productos,
				happyResponse: (res) => {
                    successCallback(res);
				},
				unhappyResponse: (err) => {
				    errorCallback(err);
                }
			};
			ajaxService.getData(obj);
    }

    function postPromociones(promo, successCallback , errorCallback){
			let obj = {
				url: host + '/api/promociones',
				method: 'POST',
				data : promo,
				happyResponse: (res) => {
					successCallback(res);
				},
				unhappyResponse: (err) => {
				    errorCallback(err);
                }
			};
			ajaxService.getData(obj);
		}

    function anularPromos(promos, successCallback , errorCallback){
			let obj = {
				url: host + '/api/anularPromos',
				method: 'POST',
				data: promos,
				happyResponse: (res) => {
					successCallback(res);
				},
				unhappyResponse: (err) => {
				    errorCallback(err);
        }
			};
			ajaxService.getData(obj);
		}

    function anularLegales(legales , successCallback , errorCallback){
      let obj = {
				url: host + '/api/anularLegales',
				method: 'POST',
				data: legales,
				happyResponse: (res) => {
                    successCallback(res)
				},
				unhappyResponse: (err) => {
                    errorCallback(err);
				}
			};
			ajaxService.getData(obj);
    }

    function aceptarLegales(legales , successCallback , errorCallback){
      let obj = {
				url: host + '/api/aceptarLegales',
				method: 'POST',
				data: legales,
				happyResponse: (res) => {
                    successCallback(res)
				},
				unhappyResponse: (err) => {
                    errorCallback(err);
				}
			};
			ajaxService.getData(obj);
    }

    function postLegales(legal , successCallback , errorCallback){
			let obj = {
				url: host + '/api/legales',
				method: 'POST',
				data: legal,
				happyResponse: (res) => {
                    successCallback(res)
				},
				unhappyResponse: (err) => {
                    errorCallback(err);
				}
			};
			ajaxService.getData(obj);
		}

        function postOfertaPromocion(promo, successCallback, errorCallback){
			let obj = {
				url: host + '/api/ofertasPromo',
				method: 'POST',
				data : promo,
				happyResponse: (res) => {
					successCallback(res);
				},
				unhappyResponse: (err) => {
                    errorCallback(err);
				}
			};
			ajaxService.getData(obj);
		}

        function postPais(pais , successCallback,errorCallback){
            let obj = {
                url: host + '/api/pais',
                method: 'POST',
                data : pais,
                happyResponse: (res) => {
                    successCallback(res);
                },
                unhappyResponse: (err) => {
                    errorCallback(err);
                }
            };
            ajaxService.getData(obj);
        }

        function postProvincia(provincia , successCallback,errorCallback){
            let obj = {
                url: host + '/api/provincia',
                method: 'POST',
                data : provincia,
                happyResponse: (res) => {
                    successCallback(res);
                },
                unhappyResponse: (err) => {
                    errorCallback(err)
                }
            };
            ajaxService.getData(obj);
        }

        function postPartido(partido , successCallback, errorCallback){
            let obj = {
                url: host + '/api/partido',
                method: 'POST',
                data : partido,
                happyResponse: (res) => {
                    successCallback(res);
                },
                unhappyResponse: (err) => {
                    errorCallback(err)
                }
            };
            ajaxService.getData(obj);
        }

        function postLocalidad(localidad , successCallback, errorCallback){
            let obj = {
                url: host + '/api/localidad',
                method: 'POST',
                data : localidad,
                happyResponse: (res) => {
                    successCallback(res);
                },
                unhappyResponse: (err) => {
                    errorCallback(err)
                }
            };
            ajaxService.getData(obj);
        }

        function updateLocalidad(localidad , successCallback, errorCallback){
            let obj = {
                url: host + '/api/updateLocalidad',
                method: 'POST',
                data : localidad,
                happyResponse: (res) => {
                    successCallback(res);
                },
                unhappyResponse: (err) => {
                    errorCallback(err)
                }
            };
            ajaxService.getData(obj);
        }

        function postGrupo(grupo , successCallback , errorCallback){
            let obj = {
                url: host + '/api/grupo',
                method : 'GET',
                data : grupo,
                happyResponse : (res) => {
                    successCallback(res);
                },
                unhappyResponse : (err) => {
                    errorCallback(err);
                }
            };

            ajaxService.getData(obj);
        }

        function upsertGrupo(grupo , successCallback , errorCallback){
            let obj = {
                url: host + '/api/upsertGrupo',
                method : 'POST',
                data : grupo,
                happyResponse : (res) => {
                    successCallback(res);
                },
                unhappyResponse : (err) => {
                    errorCallback(err);
                }
            };

            ajaxService.getData(obj);
        }

        function upsertPlanes(planes , callback, errorCallback){
            let obj = {
                url: host + '/api/upsertPlanes',
                method: 'POST',
                data : planes,
                happyResponse: (res) => {
                    callback(res);
                },
                unhappyResponse: (err) => {
                	errorCallback(err);
                }
            };
            ajaxService.getData(obj);
        }


        function anularPolitica(planes , successCallback , errorCallback){
          let obj = {
              url: host + '/api/anularPolitica',
              method: 'POST',
              data : planes,
              happyResponse: (res) => {
                  successCallback(res);
              },
              unhappyResponse: (err) => {
                errorCallback(err);
              }
          };
          ajaxService.getData(obj);
        }

        function postZonaComercial(zona , successCallback, errorCallback){
            let obj = {
                url: host + '/api/zonaComercial',
                method: 'POST',
                data : zona,
                happyResponse: (res) => {
                    successCallback(res);
                },
                unhappyResponse: (err) => {
                    errorCallback(err);
                }
            };
            ajaxService.getData(obj);
        }

        function deleteOfertaPromos(ofertaPromos, callback) {
            let url = host + '/api/deleteOfertaPromos';
            let method = 'POST';

            let data = {};
            data.promociones = ofertaPromos;

            let obj = getObjectRequest(url, method, data, callback);

            ajaxService.getData(obj);
        }

        /******** Privates Functions ********/
        function getObjectRequest(url, method, data, callback) {
            let objectRequest = {};
            objectRequest.url = url;
            objectRequest.method = method;
            objectRequest.data = data ? data : null;
            objectRequest.happyResponse = (res) => {
                callback(res);
            },
            objectRequest.unhappyResponse = (err) => {
                callback(err);
            }

            return objectRequest;
        }


        function login(successCallback , errorCallback){
          let obj = {
              url: host + '/api/login',
              method: 'GET',
              happyResponse: (res) => {
                  successCallback(res);
              },
              unhappyResponse: (err) => {
                errorCallback(err);
              }
          };
          ajaxService.getData(obj);
        }

    }
})();
