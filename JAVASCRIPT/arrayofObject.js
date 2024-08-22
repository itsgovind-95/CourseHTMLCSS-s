let amazon = [
     { hp : {
            items : {
                laptop : {
                    student : {
                        programming : {
                            notebook : {
                                price : 50000
                            }
                        },
                        gaming : {
                            omen : {
                                price : 100000
                            }
                        }
                    }
                },
                mouse : {
                    type : {
                        office : {
                            price : 1999
                        },
                        gaming : {
                            price : 3999
                        }
                    },
                },
                keyboard : {
                    type : {
                        office : {
                            price : 999
                        },
                        gaming : {
                            price : 1999
                        }
                    }
                } 
        }
   } },
   {asus : { 
    items : {
        laptop : {
            student : {
                programming : {
                    notebook : {
                        price : 50000
                    }
                },
                gaming : {
                    omen : {
                        price : 100000
                    }
                }
            }
        },
                    mouse : {
            type : {
                office : {
                    price : 3999
                },
                gaming : {
                    price : 5999
                }
            },
        },
        keyboard : {
            type : {
                office : {
                    price : 9999
                },
                gaming : {
                    price : 18999
                }
            }
        } 
}
}
   }
];

console.log(`Price of Asus gaming mouse : ${amazon[1].asus.items.mouse.type.gaming.price}`);
function printPrices(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            printPrices(obj[key]);
        } else if (key === 'price') {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

printPrices(amazon[1]);
