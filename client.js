var blockedLists = [
    "AVALÚOS PENDIENTES ENVIAR",
    "AVALÚOS PENDIENTES SUPERVISIÓN ERICK",
    "AVALÚOS PENDIENTES COTIZACIÓN ERICK",
    "AVALUOS PENDIENTES DE SUPERVICIÓN JULIO",
    "AVALÚO PENDIENTES DE COTIZACIÓN JULIO",
    "AVALÚOS FINALIZADOS",
    "ESPERA DE PROPUESTA INS",
    "REVISIÓN DE PROPUESTA/AVALUO Y APELACIONES",
    "ESPERANDO REPUESTOS ASEGURADORAS PRIVADAS",
    "EN COMPRA DE REPUESTOS",
    "COMPRAS REALIZADAS Y P.E PENDIENTES",
    "DECLINADOS / NO REPARADOS",
    "PARA INGRESAR A REPARACIÓN",
    "INGRESOS",
    "ENDEREZADO",
    "ALISTADO",
    "ARMADO Y PULIDO",
    "LISTO PARA ENTREGA",
    "VEHÍCULOS REPARACIÓN EXTERNA AL TALLER 3B",
    "ENTREGADO EN PROCESO DE COBRO INS / PJ ANDY",
    "ENTREGADO EN COBRO ASEGURADORAS NATY",
    "ENTREGADO EN COBRO PARTICULARES NATY",
    "ENTREGADOS CON REPUESTOS PENDIENTES",
    "ENTREGADOS ADICIONAL PENDI. ASEGURADORAS M.O. Y REPUESTOS ERICK - JULIO",
    "REINGRESO A TALLER PARA INSTALAR PIEZAS PENDIENTES",
    "COBRADOS EN PROCESO DE LIQUIDAR Y ARCHIVO MARY - casos cancelados"
];

window.TrelloPowerUp.initialize({
    'list-actions': function(t, options) {
        return t.list('name').then(function(list) {
            if (blockedLists.includes(list.name)) {
                return [{
                    text: "🔒 Lista bloqueada",
                    callback: function() {
                        return t.alert({
                            message: "Esta lista está bloqueada y no se puede mover.",
                            duration: 6
                        });
                    }
                }];
            }
            return [];
        });
    },

    'on-mutable': function(t, options) {
        const nombreLista = options.list.name;
        if (blockedLists.includes(nombreLista)) {
            return { editable: false, movable: false };
        }
        return { editable: true, movable: true };
    }
});
