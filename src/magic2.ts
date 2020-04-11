const DATA_URI =
  'data:image/gif;base64,R0lGODlhbwDBAPZlAK2ws/7//k8iEXOQj8rU1KGMYNZ4B2uIcrnH2NWGDJets5dwU9WZUpu0y9GKKTgmKbOJKk1ucYySja/Itq5zK9vr6tKzp2x2b4uWqbRrELjJypJqLY1PDoupl2Z1iKvI1+nu7Lm91m5HEDINCYpVKXBJKtfk29HLuqzHy2xwT0tUaa+Vi7CsmXFwL05OLEtOUC9EK09DEJJqE0xpVcd5Iy4lFe337g4ICVRoMHBVSO7496NYDb7YyKWfrRItK3BhFCw1RCoXIIV8huvp3AwfFWRccHo5DUY5RL9/TaRdLRQSIOzv+ff39+V/Hq21zqW1zq21xbW9zqS1w629w629zqK9vr29zrW9wb+1wcO/v9/d4ratyqmsxsm+1rW1zrW1xb21z+xyBOiSKNKnOteeGlFeE6acyC9VV62916K9z7zP4ZiZyY2/iffv97at2qan1Li95vHRw8zX6O6KCrvZ3KzX2JvK0/OoOebAYcHq677o16rXxvSeFebAOPzu4P///yH/C05FVFNDQVBFMi4wAwEAAAAh/hlPcHRpbWl6ZWQgdXNpbmcgZXpnaWYuY29tACH5BAkUAGUALAAAAABvAMEAAAf/gGWCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4pAE2IEy7ubAEK8NDJsbArRMtCzgFBwcSGsirykgbPyILzgRM06hZP2MUMQJISEYpWd6jNiw8TAQkDhACIg4JRiQsJuuhWdsEftBwkC9BAg4UIFyY0M8TiBUQUkhgIbAJhx1iHHBAElFaQ05XflhLsUAeDSMZMhrhKIHfx00dSFiLITDDjotNTrJ0+RKTFiFJNIqQQcMAjQwDaXCYx8JGT58AKiI02GROxoFIITR9amiX1za+dhnrBaIMCAA5KNwrWrWJ0aBu/x0UOBGAq1kdJjTovaKgL4C+HQZA69Dh7wV5Bg0kProDqeIMBco+rWBMgxYF0C5o3vys8zMhEkqyVZxAadDFG7b2xAu4RwfPsGNf0Fby3uIdow8eqMAVBA8AEmbk0DyguPHjsHPkgKg2sc2281qo6z1Bg4QUKjhn/iwbO4vai4uuLQDArqAK1iWoFyK7PfESIpDMk580g/Ru5s1q+OtXAjS/rhEmoGD+vZBDSRvIkGASSZTQUn6E+MaNFgRcQUAhIGiR4VgV9FCEawVoE+ICCywEYSJeMQLPAF1g4eKLL1p24iF11cVIh1Fc4YUVYOToYxUa6DBjJSawuOORSGJQBf9+Q0pCwAAfUOEjHGg88QVfADDZZFc1GkKAklOGUOWVhWl5om8K8IUCAFiyudcEvShgJBRIShmFkmbm9+UBMxQRwZ8zBNrnZgudNacTdXqB54xnzeDDozUoISkRlFIaRBCPzgAcBmIimqgU3Jx5xQs1PFCqqUHccKqprNbgwxkqcPrpjheeGRwMrOa6qq6sAiHrrFacqQCuvF7KK68+9NDirArw1BsBpPIKhLHEHmuqssAGm99ZPlhr7LEx5IptmJ52AeFPu6IqwAilCiAACQJYO66n9Da7rQS7ujtUCSOsawQDFBjBbrymHjGvnUdCee+q/coEsLsjLDUPvLoeTC//FSzqecCqIiSRwFUcrLtUVdasG6+vCACbsXk/EWHquxndhtIcVAl1MhcpWznFxQ+at8SwL6eU2Me2uUXaPO4eQafKtbLcgalGOCDG0E1MbfTRBI3wwtKz9qznETHQFxfNRg80tkZac33xjl6zfIQACVFgUwakJYBUBkg8d1DanSLsaQdNu10DCSESngTdpW1gzgIU5I32CzkzK5mepKZTQAwWMDAVDRRYYMGBFiDFL+R9f8roBUHkcMIKJXi+eecWEL6C6FpHvraUjAoRRAlIhLiC44k3zrh85wRRhO2m2/ru4RAwONrcYtPA7/G3I5nnZC/El9RUVxtkdhPFX6AG/7B0Xt9TFkdEbfUOpBk9tvciGD9+9Tub/5EJT4tw28cGhEH1YuESH/mmYL+GmCACQTDC0Ng3tvcpRnry2wLOZgUheMAgYlYzAPcMIDSqPDCAPFJbnQq4DiZcYVoyiFkCmJeBwzmwNCCUIP1I6A0LRixvNpHbTRCSldEUTwjLmuG2pjCtehhBBEdMIhKVKDEkhCsaE/yUAoTkNCKw64pYzOLAjJCQJ86velO81w3cRcYymlEEMehXx+IFRRH+jYbTGAK+SoCgBSXoJgtCSPzIGIRfSW5bAxhBWhgEgbw1jiOFTAgSFsAuVPVADjKUIhyRoQXUuYAcQ2GQJjfZOBI08v9aFWJWGFk2g1aNIAbwUaIqCWaqZIXydn2ZJDCgxSolPMCM7rplvD5ZMIvRawAKOFcRvPWygfHqAqDpkRQjcAUIYYFURzgCMWvQSIJR70MhPFIaUICB3WwLA0E4wgVcI81isqoerHwBtjzgx1+WR08eKMJECHACCRxhBGs8JwUohjK2ecCNUhiAFoYIpmwWQQALeFjDxPBD22EzTAQwgSxx4ZW9TAkDByKDGBrEAaKRQIBJWojaBnquV1JpaSsgAVyQkpENLMAKX/SUB4CJgZpy6lxuWlOiUiqDoWXACL6kgmvWU1Nn2cWizErBaZQCRHL5jQt04o2oavojv/EUAhz/SEfptnk7j5xIRxL4J7BWkAMS5CCoUpyRAv6JAWZW1apCWIEyB3inUX4zRw+lXzaf6kZgMkpHX8grXwfr1CNFAAOMSpMV2Ik8uhIWCodV6zgXeyi9WhZRVYissNIU1sd69nYrq+B+1ICBIgDUsXzFgFHtogM1KUCwqKWfvaY6PtjGVopQ+KuR5NnY2150AH+Fogc80NvP3q6mQ2qtXkp7Wt964S82+qpePKTYnTXXsXa9V6fUWdwoYle1MyIASG17WdlOTmM+mml3y6uzKKz2qG69E3Hf6lyc9eJ0S2NuYelLvwlOlJKF4dFrq2tcyybXj5pZL3tz9N7JBHhHA97q/3WvtDYFdOC/uWDCgxE1ALHeNooNeCNttclbCX84u6zti+1K284FIyy0PvvLVgdA3v4mCkrRNY+Mb+zh9rpYSee1i18Spd9Z+TiS7Y3liSzc2OL4CMSxVbIzK8vNHtfXTmoVwlMZS+ErTyFUU94rBqzs4os1K8dPYYKH9srlCdN1USw7wFl7QGchkLnM9AqMVF/iC9+woAV0JJEEanxk7Aq0J3kZRgE2EDcKLGA4XYawl6tw6IbgZQUFiFvz6DaPs+7Vy5iF8TTgkWkImPpwjSkNB5qKZ/IVpx8mYEGpk4CNgiSlBGht9Y5qiuZcnGDWJEAiUUrTPPIMEMpI1msJCf+AVUb/IAcCEccGzOomXRu4hlpogQso0IIUtIAC4oCPC9po7UIrKnCUVA8L3CGBAhTgBwaiHlRBPW8pzJuZBjwGPFggZxq3uNxfUKx6gnw/Y6zVxEa2sb0Xfrxev6RI/wY4mTwgUXgW2NwJl4KJnAkq69K7XgqIALrTTKH9ZlzhnMKwLfRScmQDXE4E7wlhkOrmBRdH5bWwgYr5+/IZIHaIPP/4oFGA06BjnL2Hva+OqSxxqGKg0vkBjtGtTdwsT13hx53ByLkiJ483nU4z3XPUWf1xSeN7Rle489HXTqcxN/gpaa/5jzFARVvJfcEwP/DFo1z1xO59wWe3+9XL3Pf/MwETDNUuu18djmhyy726IV6bepJL87vX+8hup3xBEzXX2wIAzOENTE0xXYBhmD7xyabwX/zz8y3tRwgzqOO0D1R61LMJAOsOUQrEGcwt1eUsOGCc3DSpoOFQ9UqkLwkHpr21t7P2PAcowDzighURvEAzM5W9C5GQji1hSAIbKNrRPkqYC7hApT30Xmrq7v2fIaZuibswZZT6P2JfIOZDIkAKckMaCqTgQmfxA/VXGv/nfYQwARfQHFRDAZpiFvqngPD3UgY4CGcBgf2XAwxhFuAnfkazARLgFBNYBlkQfnXzQD/QTPqRFt3zQN4UgvHAf/EnGfizAUNzNAvgfENU/wIw2GkoqGYVUYIr1DZN8iTvB3808AO74QsAUAIdVDcZoDoGWAES8AOIA4TzcIK+oH8MZIQbACfe94C2AYRG8QMfeBY5UIUL+FIgeCIBoAGMI35i+FFZ8B1FCIQUcH8VZHCHMQZwCIRGIE4pIBI1aIQ3qCcAIGcvEAMLwFIvRBp71DF9SDU5ADhHhTrfgkkk0BgQ6AAls1CReDQx4AIoiGhFcEW7lEX1oFJYAS/sEh/R80IUwC49gHOu4BtCkAMxgEplpEXuMm3xcylqNBREkX4G8VOXIgT4lwuXkYiLZg75kASr1C+ouC5Y5C6odETgBo2N9IGW1gVHoCoLwDtIsP8RmqMWDrAArHQpRrRE/UKNphgDMvCLxoODtgACEiApupRKCaFS1lACu0RNHZMEF7FPz6gv7viPx8NnPYArkgKMt3SN/thIpRIEBTAGCsKJCLFPO5AE1tBIl0IEG/dw6lEE0QQpqqIq7GJLLyAE33ggXMQRGyGQDsCHsdhIN1CArKUFfMFvOfACDMkuK5kFtDQw63hEJUBI/FIqRKB1TSIhV+AfEhEq6HMpKGlL1NQv5ECNkaJ1tBhHJyCUFHgB5eQDkxIpKYlFS+lVIYghX7IeBRJND9AtqXIDadmVbNhyQ8Ue13cFdjmBeEEhGrKWXEIIjPcLg8B4ZVAjiJlzv/AkFY2pmJAZFonpmIT5FZO5mCUUXY+5mTlmI4ZZmYIZmqIpCIEAACH5BAkUAFsALCcAAAAxAMEAAAf/gFuCg4SFhlsBh4qLjI2Oj5CRkpOPiZSXmJmam5ydmyCCICYVigFMnoUEE2wTPB0HLKo2qI0KOC0lLhAQZTMHE1q0iiYHPw4yImNjuRC/wocVEhtiFCTKItYLAKfPhdJ3GRxkY0YLYtqW3aHSYhlGNMcUZBvbh+mcPCnyO0bh73xJOjC5J4igpnwQyHCQx0EEEoUpslSYqE6DPoUJOSykQeHHBgkd9swqyA1fC4b7FmZIgKRFixQCn4GYkEMGxnYcMsAjwxECPZkTDshAsovnjgw6aSQgQ6aABFC0KkyQ0OJHQgcOktJYyJTCAROcEolSNWDAhRgyfFKggNTdu2ou/yZ8mvnqwoEIdlN4LEGiLwlcRpJsIJGjAylMOlQd6ABAA9kDB/ReKFBgwQKnlBcIEfIL6iSpHcz2ADEwwNRXL1g0zsKatQUWBS50COk50lRXLiQQID1zQN3GwAEIV8251QACnwGEHJACsoIJACAf8LBZwma72Ksr2D3JlAbIvqWLP1C2Ona7Qopc2Ay2u3ceGl6VBzlbAnrr1a3Tf1ow0kCSvI01iBaMaTAFFE9UoaAUU9ChQEyamGKQIM+ZoAYdcmCooYMYqDPIc3V8gECIGEYxYhUetLfJhFuASCIVJ54YAXLdmNJYHjiWiICJakgxozCjBEmfAgp8kOOFdKCQIv8t8UHmwQUvRHnEC0IcuKNjdAxACouTECAEET74EMQDZI6pRBAqqGcXBgpoaQ+XiygAwwNzlmlnEGeWCUSaNA5iyiVXvGDnoHeaKSYQ9fipQ0mQmCDBmIQSesSgPqgAwGGI/OkfADDUGWkNI9TwaQ0zqHgJAYJ++sAIOaQQ6qcv9EkJAR2ouqpDC7w6ggAC2HmGqV3OYKtD1IQqgF+9khkrJo7aKgAEd1DD6w5YJZCECA/4ACElCgChqgAP8UENV+JGy0EQM2jA7AV0ErprBnzM0cRSS4krxr1J3PDVqRLM6WmZx947bwLyClwwBQ9cUJttqbprzb32ilGwuAWTcIH/rLZ5+0CyZAowwgIMKFWtUktJnAA8SKBDyRUa25msOeGwlQESSOG0FlELaKDDynXGUCjIOxSAhwUbrMDADgnssIEFDFT2FJzQAODumAKAnMQJflhQwgpxJDHPBnHEsR7GjSpgZwwi+MyrOTsw8NoGSBw9rtuWSUQJCLXO+SxRG39MzVoQIPGQAfLGXFnOd/cAgwtBxDAGHg7wOsIGd5wMz8hN3EvCO0h8BKwjPBwg6gPJjBG5x5RnPvG8FB+TwRjNkG3IPd+NbgQDPEme+sTxQizuVjztKwmqZZYwRh8O+Dy5wfI2r7pRwX/OiAlyJvssA8uEOg3zEkuclNKwCw+J/wbCbrwxXxDkgHrl9VIcL1IGJAEB7Pw1OoCoHIe6QA7aR/u8yV3ZRdxIIATpDaN8LvsY/0jHgGiRIRxH0YgE+yICARwBGONrGcBYlYOOWWMM19oVr0bosVDhCQYKgIQCxOSuCyyQTBQMlQwlN8IHKK9+05Pap1wIqY15TARANIIRNOKXvuwPBx1whFQQSKgUuGqDVkmCSpACOAocroBKvN/oCHWZBG4AckSBQFJkkITK5KAHPGDUMM6wRULlYAW8AtgPlOGAXQSOAiVowWtSYMBCmOZfhEoGCXZVvBLIgIx7KYEAYECchZVihd9KBgQ4VqhV6Uo1iWoEE8y2QwkYD/+Er7pTpKyjs0pw6lO6WcAGMmIrOxUHEn/8FAZMkAVVjmOQxlKVbhxZCpYRSgkvgBEBWKBK7HGAVyUwQiiVRaU+zq4K/1LCnraDJQDYcgwaEZzHfOhE68jukSwMwjSjkCEsIQAAfTEdwXK3MRKs4IzP2dScxOkBKWRIFUkiEQus4sB7GeFYISvCFaawLdC9oFIeYNODtpNPfZJAHt3jiDLOqIUpKGAkjjANXnrAICJhoJ462tEwf7CSgZGhcwU4AfVSaJvj3FNDZjFnPglQgIeu82tZIIAqWFq2l+bIR2loKJKysAKunLQFsbiQgtS4iMSEdEMJzcOO6gAfDdUUKyT/SKlOk3TR8VVBD1WdqlI9oNSZZugEqtyANsy51EdIBQUhkqmR1BDVoZozC05J6ou6mkW4+vWpCpgRkgZbzReJaA8d+GZ/toC3uBJ2R3loQARENCKxkuipZXVrSAxk2STJIbBbrSxmH7sdzYr1SiEg0UcfO1rC8lWTDOWRbEe0WtaK1kizdVMWy9pZNdR2pre17XEeAYDjpDZJPKJqHspSTso6t7e0vQJxjRvcyrKnuratrG946Q3qPve4dcWueDvwo1pgoEeGFW0EYive6nZgSYywwWzwCd31Nre9p2WMEntwXhh9V6r2xe9xIRtZnjZVAtQ8rXrZC1zxTsQxjXAU/3tRW9kAf7e9QVLsOib8XUtZKLsKpoIcaKlhxjJGD7PlrWAFPGA7OCiTwyhQgzBbhRWzWKxfhZqE21tj/144vc597SI0MAB7AvlEZL1xkA0DuiLDJ8W0TfKPxzsFphpCC94NcW3RoOQ6GAZqjJ0scn1c2S13eZZuzTKXnYuBATh2ys598Pg2C2UTMTfELRarnB9BgAOMOQQD3tGd4azg0vJZyi7+rm94e2QRBVVBLf2zghdN6PyWmBBEvi+F60DpQOfZuUW2zSwpPNuEVvq59YTlFUZtIjJ/AAqmxvOPUz2+/rr6SkVIsKwdLegpqJrVFwYqowmtX83aWtI9svCuD//Lg+dgdHqMqUCMWg1XBdTTDrcW7xSGu1/2LqgViBVztv+K6g4psQOPJjePMCDuOqNXDYAWUZtN2+zgACc+iD51tQfg1gdJ4DKUCThlxnbbNRd8ydxNRQpc0BfBSNHhJdDNppcNVzQr8QIi0Anh4MFxGayV4tOOj7kjnAKbqM6k4xICsisNWk3yoARX2Ti9lkKBiID8uVDQbVMnQAKBEYxkDqB5ClZOcSZDWx4ahx9O5nGxm5OZ20NuQdC5khNrxYAESPiBxNV9cHJD3R4AKMA8qEWDd9AgmXCjqIIMfmo2xbcDGYFXNca1gBbszzFW0veJYOxHYirEa8CTQQremYP/prt72RflUj7qKA7XJSEi/NW13sscjCELBQLvwAgE4oLcsE7+RJg6hB46gIMNiGAoDXdBgv067l3DdxhTaYELPGL6H6Tgq62/uZtZJCFHUWkFKygA8K+AXq7ru5xc6n2V6MvZeH/+Sg+2ciGiMeOJ593pwhSF9FOxnXQ7neKGboQGJP98WX99yMcuv/kvvQVXwPvmZx45I66g5u/DuU3TDa36n6tPHFpe//uXYlJgcfNXf/ZnfglHCDfCdl22a7pBXN53gA7IAxmlIEQngc7nf7CHexgIZwS4c1UgbbfleVN2fY/1gb2Ebk5ABR01UM2HAAA4bDCIJLQUekPmb+Vx/wACN3yYdCCt4YKswV9sUgFMQBqRIG3UMwMMNxhM2BfnIQROIwEBRwI4oHK8cSp6QRQiQ0Wyp4QkgAyIpBHIIAGL5R+CkA891z0FA0JlsAW60BM0oBX0sH3xlQj5YHJhcHLz0IZWYTCZwxM/gRjtNwN4KHMO8AM4sAXGYDIz5wA5A2bz9wLy0DyE80AuIAjGMHP0AgEL4EzE5QLqxIjU0Ia3EHQmRTAZgEUHUQZjoIlLoRluKHUEQ4nUUD+QeGUs0HMzNy8OUACj4AImp4aZIwMsQIdKVHKnmIcQsEvsQDjO4wAtMAG3OAwlxxQ/lzkU8DQSMIk/p4wtwB2ZAAIHEP9zJdMExMhY4xhReUgNZ7QJQZEQ15g57hQAJnAS8bgUNHB7EXIFsniPJHAC9JiJs8iLGaCPpZBFi3iP39giIlAttFiQdnMJM1F6ZHByBfMDo1FUpkiLDmAxFHgqxWCKA9kEZWcdLgAvtHiNWkeERbgziQA1HRAD5GiRf+ERFbmOMycuGVACizEbwFAajbCNPjeL8WItswePTYCT1+gOD+ACMLAnRTYK01MAdFSRc1CU73N61tiNhINHFSRDMkQENSA+VyYB+lBFM7MTJ2MESIA8Wzkv2TNDAlBBMRADAkBR3MANXtIxdSkAdWmXQKQRFDBEWGGV9hKXc7k5RFQNdwf/FUU4TA9wA2CJJ0EwmTZ0PmQkRhyXdbviOERBRqv0FzGQLrOgBa5wBGApOakpQzfQmnI5lyVQAjFgLPNTDUHkMTcAA6U0BPEBA3xxLNVwLBuANjF0QvNEmZJZma6JNnZpQidUP7S0Aj8AfNaAB2sxBkjwDsqwASOgBDBhHRdQBFHiAoxTA2Limsn5AFNSBKrIWFkgBCJgGTDXOUlAn4JTACUQBIyUYaumHBewak6EA1KCF06mU45pIQeQJ5XpMXEkQqASBE0HFZU3fVtgHwwllRJCCBpVSWYyOqq3VTbYVMZoChaiU+/5hEMSINOYKf5hmiC6KCyJCB7yJou1ojNKFQk2yqI5eqM82qM+6kc/+iaasgiBAAAh+QQJFABtACwpAAgALQC5AAAH/4BtgoOEhYIBhzYghoyNjoaIASCTPAQEi4+Zmm0BkgASHQcpBxOTm6eQIFkpLQs/PwspGjaotZw6ACk/FBu7BTgTtrYmFyIkvEkMCzMmOp3Cmyw4xzIcNEg/pIo60JnEZdYcGQ4ULqAKHR0a3Y1MEy5lSfLkJSnpBzgtpOyQHfE01hxkMHfPRQFZTPgNkpRiAwQDO5KQ+wGKzYwNDEgAUKRQkIkUFGjQGGcAoL0OLjY42NDBlEKGMpAkMEBzZZkLuiCsPKClIydiG5A4mEkTiYwNSB1g04YIGrdOQHWKnJohJBIIMiiWSuh0iYkJuUogjbiDrLyILlII6aCgFKeFm/8qVEEnisQCpCTy6s27YdSBCxciKDBBmIkzTQRCHZBQQEiBBZAjL3gcWYiQv5gPRJBQSdMSBaQkFEmRQ8KKAqhXqAa14oI5wJhJz1isgNYjEKA/4ZyxusAK06pVX3iROfMFUANMZLJBYHFFyxKgQ199ubhzCbQx3bZ0ZUB06eAtw858+bI67Z5NhCqCvH37IjPOfZLQo22zpqdUAQbAhT+U//4BUMQFg01CiSnPoGJYKFF8MYUXEDbo4BfsXZIIN+zYAMABH6DwYIQgFrERVz7h5gEVEjoB4hcKqNCST4PINcCHKq4oxWaLGFZidCn2B0YXP1rhAQYGVtCMQurN+F//j/VhAB9/6aijkAbeXbGiECq8oCUQXHYJhGDKdUPljB1iEN0RQaT5wJo++JCmEj4AwRmGtqBQJRRFoLnmnnz2+YAPF1hY52JUuqmmn4gqAcQl+J0yBW1AHIropD4QSaKj3r0g6aSJJtdoehLMwCmnIwgQQ6UVDNOcoaPyiaYAfc0wiy02dKBnq36WYBRPdHrWhgai4tpnqRQwQEGgly6nQwestirAniOQ4MBKKYSZXxWaCiuAAKUSmwA5LWzkGSJaREAErs8+sO22Es1Egz7BLEfuAG4Ku6cARgg1VV9XKCgBETDYu6YAIc1TDwtD+Fsvp9zeS4KxGBUQQ6DoLddB/w2tlnqvvgtYUMAD2viLaLrqrsttCd+u9FgMpR25CRMKLHzvmsRu8CysZHyLTF4piPsyADJvy6cIDCCxrrQ1XeMQBDzlZyuf6+4pAhlGPyttE0nz4gCyyUKyap/pbjt11Q9cjbW7JCBRLagBQy20ulPTkK7ZRGVgzdqZANumnyTjq1S6JQxFUxhNZGDEBoFqwqzMD8QAdgwUYDPCCEYIjrUYEBixwIuZxLxp1Pca03AJDHzrLgQ/rHAFCJ8W4k6kuE5egggPjED6NVchNfGIncPuLOWOPyDCAkaIIMLbIBOwHND24hu2CJNP3nANMHSwfNvCHk/zuodzkFcLLihwPf/G2WuvLl8hbYDaPrcB4DuuMQR/fu7ytMBZT44YNsGt6MagsQC6QoYIzGGt/DGveSUY2JrEUjwBVMo2+SPGpkYlgAUksG/Se8A6lsc4UtWgggVAXg1ukCZmeOaAnOIfUu4Sg7e16YEnPJe9LsCCFdylF3vSUgSUtwnP2QsDQGKBECz4LBfEZ4M97OCa+HcECQQpCwAowAbE0gKEoEIB79vT++SEACBFiAVSjAUzuuYI9ynxAUCIkxO7mCIrRHEBQvAADx2VRjVtSk5YmFB9zCAFFFlAdd6p2COA9QAdakmHKphRD6BjJjP10QJQ4lxcOnAGIfRgBU0KUCPrw8lG6jH/OfnRgQZIUQkQdVEBQzoliBwJIQAIRkHdoZEs19JGNzaIlVVYDBkbgQ4PLSkE/7EMimT5xRM5KJD5WaONoJDKYdYoRD7CwA5bx4gpGHOZzXTmMwFwzRZNgJqGuMI1bZTNZaLSRzfayiMQwU1tpqic2OwjhDwAynX+SjC1nCcQ0bmFVY5zAHKMywAUoMonDJNHy1RRD7LZgR2Cap/9BNGd+PlJgsozAqs7oZJqead8PqicQ+oVIxY0Thp1dJsAKidA5/iIcy7zpMTkAoGA+R8MBBQx8LzlRg1KToteFIm3YeUz0QDQNvK0lTP9ZUg904Gd1simE0poUvuDAGRazKkQ/yoqSqM61f9YtX0lRRFUPdoh9qxoqctBAT57SlYqwHOaccnpWI8aVWYqMwreBCchmECAtUKoAVSY61btSlMUQPVlIIBpYMPaI5DWU1kDwOiKBLvVck5TrwtJjGRBtAa/VnafaWiRoJTVV58qVERGjahbndgf0daitHV16S9XNNFQFJCpWEVtXSUqhCANFLOQoKxM5ZlQYf7nRJNIUFo3G1HPonSiGAWu61pkWplWl7ZK6oFDa4ELF531uko1pplSdQqoeLOuzlXtEyRgzCHRqgLNRKduB6tV93IXWFWwElfBK6GiulZBBFCsdQv7XDlioGmoSExXa5TTFEGVvbfNm/9ZsYkBd7bSCw++6bikMN/vPqgH6u0Pe6NAT/Kmh5ZL4mcqobhbLBQ1si5bXnpTigEA1PDGN27NBa7QgxdYLy6b6ZGK2SMZyGwAMqWBYnx2eQtB8GDBk82BWKoREXnIowQLYMGGNOyIxIB2tjUCwF1MR5OZQAAJRslyqDLaUihzlgXHsFyZRUIOEmAyukxuAzF6gIDBQmgFcS7znMdBjhwsUgKCLAQxekvRXwKaBiWh81TEoZTSiIaljDCBVskqBGtkIAMJqIpI+AKu+phwOzNGqgxWsoMEJMHTdiHBY3rGgu3eJtUQ6rRAOODqgMg6BwWgSIMEk2c9E6rRwYyzr3f/HYtYqG4KK8UsbrC6TYc4ANZoJsEQRxEguA6S2s+UYp2vfWY7L1LLfyW2hInbaDinDwLHQIK2WxxIzOI3of+xwF0sqJeDMHq2B45xphscZhuKJzX02a2KZiAu5e5VqPj2DycDNFQIbeYQjhBuxNtaI++8JeOMDTGY/QyF8ebNAxRPLb79jNGFtE7T6kD2ykl+APElwhBamCjJd75N9uWvAyGf+cp93o4q4JrnW205qtnNcbpuNTfLaQ5/hf50W3cZnjKnuk1H24gng5vqFTf5yb+cdaR7p9j3JKgCyu50+g5gE1QCL9MVXnEvoFy6Ulc53WduX1TXuLV6jygX2vpK/8R4xzv0/PveR17yKfwXMVr4CnsB4xjfYJLiv4lSU70j9pdJwkihcsENJ2N51SD5OIcfDNdRUYFax3pnRzbyBsqQHEtUgCPdcIdBtLYvZEAgFrWBkYZEIG8KECVlIpE3okWaew3oovjHL4nOKJJop7xjARSwhqDnLAMrlugdyIj+nMNVfe6Syx93AfX2DXAVWQjfEy3gBaTPxn0hlB8aWrhA+uk/Z9T1C0ZOlgL7t340gDiYhiQA0AraR4Al8Fj80BQ8IAEtUA38VxNJAAyG4XC00hQf8QMLuH4ygGi3IF0Y12RNFoEuYAQBwYAIkyFN0QkaggPGkATrF2mpA0EvEf8W4lCDNSEDBZAFCdMRV9ACJFA54rd9ALEBLcgPzUENglaBWaNtGnCArHcBGNEuPChoRhMELyAiWqAjCpJYQWE333I2Zpg1AnADJBQDC5AFqxd1sXY4JNEEQ2GGBcgtpZIX9YAsr5UCLlAyxsMBMkABoiYSFOA/tZM2dpNAp5YfFzBCtZMmpWI8Kug9RlADsoMExkIB0KNBYIgYaaQEokhCpBg9I7AmJGQ7EJA+wUOFRYcme0MEo0iKtFiK+HI8z2J/3DUfyCEEfjEggDEDL+ACbZMmqeiJJLgQRUIYbsgdzAgABKAbw8Em9peMrgODkeByFxJ5WsBj0OiC+JEgGqgljQCoINb4gO0QCSS4DeZYIqxjT3v1cS6IjjAYj7fBfNw1go4QCAAh+QQJFABhACwhAA8APQCrAAAH/4BhgmEBAYRMhoOKi4OFiYyQkZKKiEwEEwQmNpOUj5yfkgEVlxMHKSkHBKCrrJGiLBcpODEUGzgTTK26rUwTsiQbJUhIPx0Vu8ifNhItJRQQRkgZLhLHjcnYgyYXGyQUGRzDZdWNudnY2wXeNBw0NCLkhCDzi4mGnueLFQfdGQbh71Ko0qJAQgcFmioonLdQxzxRgioVQsdvh78kSBzIwCHh0oxTLzrw0NDBYMmSI01cUklKC0tk277RaJJhJhJbBwq4KJDixYEDES4IjRCUqNCjP48OMKgBxMRVWg4gSdDEgFUDDtjhcFFigdABSZGKDUv2KEJ8k7ZBoHrValYZMf8WFFjgFakQsj/vHgArFJUEBT9VsQIhAcLMtlfBreB5KihSvEn1KlXgIZWuDi3WInbLYe4CyXnxChm9dCmGkwMQ7qKTQoYDtm1p1FyQgu9e20lLhy0NIJOmXTZY/KAAG7YDJDk4YrqkYEoVTBomOI8+fWRTesgsHRhu0507JBComYho4+GhSuWXOHVEKFuFCc021JJPnwSMePmym+gwg65//3fNIFh+yVRxgHQAJIiFBQpGoABaBK4yxQAIRGHhFwp6QYUHGDgU4WoUXohhhh4MkF2EGoQIhYYYsrhUQoI09FB5hdjAHoEaePBcizxewV8VKhVkkGl/HZSgMQ6Zkw//ATo64aSIK2IQkgQXPPCAD1hmWYOVVvpwQVNKnmNCaiyWueIXKqhwRBBbsunmm24SYVl+TBDWnJk8zkAEm1z26SeXPgygCYS8MFEQlGdOCASffzYKqKBPJVPnadM9maCUjDrqKBH3/XYOBipaCkURmWq6KQwPEsoKqIhiSKqpsAYhJwj5UEaFqK6W2igMpr4wRT5TNJlorrH6KUCfWGIAbAQotPpqsVwei2wHh6AjrKjPQmultFaiioh71+bZaJuacvuAt2KSOSya2kbrpw/GpItBCBkS2+6f8NLqHqvrZnsvoEiqqsyhePr775XxuhdshT2qoKu7seZ7jg4ThBsF/wAG92muphJnEwCTlX5xscMH+9mhwKCADCWmJQN6Fsqc5LijFCM//K+gwB5wJ81CtIwvzuB2IGLGJQcBw4D6XTDvmVX6/K4GMKdVYqVEm7pxn0cgDRxhoTbtNJdAaA1cSVfQHIXXXz8Q9sQplp0g2l+v7bHKIsNdsrRyg7tjDy+kDbbYu2xjdtWmLuooutiI4mCKPpBbrOEcn3HF3A5K0bffXMLg5XjtBa60ApBbGXrRXn4bNSMVLAXAmphzG0EFYepipwaE+/z66ZEAMEApNjv9+jkAHGh32rPiDknwKEjQO+kXOKV3B5j3qcSX1khaEOjLt7soEC8EBWQ2wfKdPf+soxtEVASQVjsY15en/UIPVoBa0AzxGn8Ixu1r72cQKtA8gLASiADgQEExFUggfyUrQpSKAD8WOch6FJKS9OA0QS6x6QhCiIIcMMBAOIAhSsySFAFC1IMLqOkIL0ihCleIwhaiUAIhQAAHlyaiB2ZHZhqwAhYu1YMe+vCHQMQA/DZYhFA5SQH9Qwe/uiCHLujQiRWCohSnqMOp6VBUZ5BA4ujWKjx5EQwSyCCiPuCELG6RQ1384hNwhcYvnkEBknqFEXG1Ljy10YtvtB8lrvClNDpnjWm8IyCfNIMJeEwDi1Oj2QJJQ1y9MXGKm2PIJmmm0dCLCxcC5CMTZwNb3cr/i4PsohA8cElcGTBnO1PkF8PIMEfCUV6l9GMo14gBUoLSjBOrpSxnOcj/oeGWAMiHDZiUSlWayZddTOKS1EXHZgJSl7FkUR4nBgJPGhNP0MSkNp2jTI/1on+t3CWLsrlNDG3SmxUQpDNnSc5y9u9b3uRjOJ/0yWZycJ5nemfsgPMxcK6oAevEljNPKcx+FjMNxkRiHTF5zokBgFniFJVCm/nOiVlCnQHdZgfLuaKKOhSi6+IlnkA6S33OzYoLDehGTdmhjx40o4R8KZpaukVkclSkI23gugiauCtU7qYw5QJGacbTE7UTqIoc6qhSpcRG4nSdSnWQHhXRtno+FadR/z3ZVLkWUVGFUmnRJOrJCvTTLVyVnnaUJB8lsE+okC2lQQ2BUi9gIrLKNK63sqQ2NVrXrVnsrIPc5ig/aNZElUiEJEUrYMuETAUpiK4L0YXi4IrXWvZgBYuZSwFWsACOEACeqxDFgay62FnqLgUl6AYwksDaH7TgQDMioOC6elZuPKMmGajJM1qQgt5ogYDfNJtw8SoqdbiDKlnJimFcC1tldDKxisUrAApghJq45TXekQEJfqCz33JCBz8iLXG3yYIF7OAZybWKP2RDgjIU8rvghS5SozssTJZ3tedlLQeSoFwjlCCYkxDFROdLX2cmSB0CiAEwILABI+yXHfAALf8kdEBM8Y63sCMqoQta8IMC6KQMJCgAEl6rg1DUyJoXNvABhSALUyzAtTzBjyv6OVzKltYLfIPfUqIjARygwpApKyuBx8ssS4wHBDzowIHaOuEO/LXA13wSh6zhiPSsT8gpju4AQqg+7LjVqTeGMgYEONVF6LK+WU4UmVHJozRn8myqOSmYo0zZFy1TkkMW8xT2oq9DyjfNAJ1ydh5RwDnbWKQAlUKRLYoCBtI5rmtm25MRiuFDj5PLucQzKIM6ZqgJk5mbHu+Y5ZAfmYW6XnHdshbKrIhsOhbVp77p/zyVDSJJwMO49jBmVwDrwFb6CVNm9SAKcgEXqPbYG6AL/UL/NmQd9VlhM3CGbHJL7Zs8IAJGShALts3tHxZEgAT6WApIwAC2HCYBNGjBDDyAvltr1sN0KYAQikDX3elA2NrgQQoogF3EQIC7zTkAiLuhXdaytrOp+OxEJBw4FmTmNYjRSAuQ1IPhSMMwNMgIEhZQBgCs5xrgs+25r0IBgNMhDCzYAMSxchUabEAglYiQAnDA75FjhQIcUUAdlqHylrdcBjD/EMqHsxkD3CQFInGIBHq+mXfMKULgJXrTf5CaY8TE5lYpucfxfY19EKfpQE86xVKQkaYn4QdZgHohrrDvlbuFAiWQACYKkXKsGx3oA1TiBqYScaBPgUaGYrrNucu5/wiZYN/FcUsLsgC7XFy96P+WcX4Or5nYJKF5ndM3f5tOgRYAmE5h2M8GEo/uBWQhTBOgud1lkAqun4cFxk48eCwQc0Fk4Qf+MHs1XE8IHlxA6izHiukbn4greKPoxEASnUoBYrertxhniZHxnZ/1HHh68j2WAd/9XQyxh54biXcH3g2fAuBz3ySfDT3iq2IcEnzJ9TZg+wLKDXmAVx3JJci9v0kgBJfEljw3IhGE5gia5x3p5RYkMAOHohISIAJ2lwE/sAIzYiOdwB4CWGUE+HskwAH7hV/uoBPZBgALYAQPWAzp910pwzojsILbIgIiQAI3oRwJsoFFh24y8Fp5x/8LPaAEPHgDssKCfJJsD/A+FkBducd+lud+LHAFq8ZqV3AEe9Imb+KDD1ACVnIBK0CDSMh5RjCE1UCB2aE8nEJBbsKCJZBaEFcVSHhuDDYCN0ANp0cRUUiGK7iCOZB/W7iFbZEEDzACD/AZGpANTCKFhMgnI9AV3qCGpIdcfOiHstAR6JAjP0iGfSgCC5B/3tFy2CUNZ+eGVPg+56ABB8Ark8gmN3CKQXAEMSAAJeBgHLiBG6BdrSgAnlgDp/heYsICATQDapJCQMA9cFKHwriCPugm3OMTcVhQLpEJzHgJzzKHttiDbJJCRcSEmSB0rqAFJXEUM8CL9EZvQuBxWcAPeNgoW8toBc3of22ADYEAACH5BAkUAG8ALCMABwAwALcAAAf/gG+Cg4SFbwEBhoqLjI2KiY6RkpOPTJSXjog2TCYgkJigh4gmGh0KExoEIKGgox0XLbEpFx2rrJc2Eyk5FBAkJS0XFZ+3jiYABSUlSEgUJAsuE8WTCjMLvzQOGc8utdONIASwvkYZDjQcSD8Stt+KIAA4Cwzo2dtILQMV7oxXKRvnyjW5t0MYv0KadJE4x8HcQG0XCBwcxKRiBXELDdAwwLHJuRdXLLmzmEoVgRRGHHRcmSFau2I6Lio4cGAAgB4vUq7smOFIRE2hLALoMGDAhRmzUsTgoHLnOZ8ASoIiBY9mzQtYUyjb6JTGjxxYaQLQQQlRNQ1ZOsxwUeSCkAUi/5ju7JhEQIkcM4i+kDipYpUzBzq8wioEZcMEHT16pGAE7Cy9JjBpATAAaVEJQuI27doYsxCaERS8pGSC6OfCyxAnVkwixoLPbiV4u1VBZg4SDMSoTnDOwQYXB9BOSeWJWKsA4WaUsJehV6/WKVRRFPWNQGURG0hw4JB9wYKjByJPFKTBqGfMKzD3YNFDQgQe4wUBiNBB+BUrUe7rn68h/hsAtCCQ34AEWqGACv0Jggg/UwTohRMQfrEFFBR+gdMV0zE4AAb4RThchWD0EEFI8WlQk4ATPvhhhC+cQsCLw7hj4gAFqujhES/keEZeWsh4ooc2PmjGEUr4UKQSQIxlw/80PPwIIpA4BfHAlFO2uE8xTdLIBZApWkgklVISAYNoxWgRgZZbPpnmC1KCGQSSY7GSCxBCdBhkl2yCSaUSM6hinCQmDEAEmnemmKeeU/qgz5+RiDOoGmnWKOGhiAZxhAYL4nIFnSiqmWIRlYLJTismYGUnlw+CGuqUP2HCCWYSoqqiqmAKAKYwjBpDlKRA0hpqeKFUoAChsl7Q5q/D5MpIoHVSUaiKxq6qaLK4EDBDs89CGG2oRGDACg/XZtFlodtW2q0nrpaKbaxqlouoD7NVS9Op7Kbprp4+kJnuvGlENW6F94KZr0i4qHUBGNluKcSx72JQESYmlnHwgJHauLD/tDOIRrAk/syCRcJgXCwtEJheIkEK3n0s64Mih2oksI0Qw0IBC+SgcrYSrEqlDxHFTHBpBeRgM8g56wwEvDooWwgAOSQzdL1BtuyyxpLYcLLTN8tatM7njraIDcdo9TTOOifKDllV9xCDACAhXPETKmJQtpRnT2JtECO0nTAGR1AJRKX5xsjx3zFcSm+QPfzN9dlKK6hBjjkc4S/cbxvYd9lFaICuzxVIQJPeK0cZquI+vNBB1Uzw8AroK19eNs+ovzjf5Ct6KPrrA/S1iRYXKHB4pLcb7a3uZvYAMheuu96wZEUYX7mNlEqb+yUmhPY7ngy7LIFk1oMc/dSNE8JJ//eeCvk9okc7TDz52bKpfKVnlDyJsCp4EMK/tiuOueCRVDWACrSrXRSE8CWj2W9j4NjQFCJgP7epqQiYyVOb2gQEn3hAAaSRgO8OJIFnYQVSGCjCC8ASORVAsHkbQlujeoeCKfyPQ/UKoe/sdJN6XVA2KnQEgFYkBPq0BwNAFAIMT9UFARWxB5nbUF8wQCgFeOCJHhCCFJ2HPwLB6oJVKw0MpUAhBQARiBu8H8guqIEzZbF5FKtQp9LIqxAgUUJmZAQkmHAFNE7hedmqUQjh6C1GPewQVZjY8djIRiE0cEQxU9Cw2gi1lSEsil0QUYKM4SQ8OrB8zoLkgbQQPmtt0f+Sg0QjEq+kw4xdcpCNfCMCnEjKRlhLgKgc1ypFGYEe6YpYVRykIRGGAQ94zRAaIGMuYdlGCOanKL8sRDBnGMts2dEo4nGlMIeJSRsh0QwPgmYmQLCrZmotc5mEGTgWSU0uUrOXAwrNknTVQG/KUorpnEAOF1EaQbqzS9NUZ//UwsZyksucaXjPGVuIR4AalGLohBYBwkfHdlLOn+NS4KwWqqCvjY+YEM2PEDuFyG1W76AZBdgaUHSWM4K0mvizo4FqaTcAnvJ5b5vQHiOEgVqG7w0fXWMjhykBh9a0lePEZUg1SaH/TTISOwSoN3cZIQ90lGPsKyj+VInNJ/IFUNP/jKlW8TlEMuruFeWTaoUkkLkiXnCecqTjiKgo1nHhBIYHQ2BaE9pWrbrlY/bbXCbqGMZ7OkEtEliB6ZJpCG461K8AQhlw+GfRV77UnUJwQQE20AL5yVELmNFpSLvUg+UggQTi/NqBmInYFP3jHGUY1bLoI5xchnSy2fhNnN5R0yoQtK4oXUEJMpCAMcjAIIUVh1B3StyKsYAEFOANBXBwVfEF8qQoxR9nkZuA5lRWEU2qT3GjiyoW3KYeLYjXITo3XOhuN0UsKIERkLADCnwHPgrSwRVMudm65kAE7N1AAXoW36LcEbdbNW4P7kuBz76XEAu0bV8DnNGbEJgCJegd/ylLpV0Ac7eLL4hBCzym19kJ0MLVVEsKCiABef5MohWrby4lcAYAUCVTARDHhxm8WQyExyKEEFZw+qliT7lQvIMoTXl7DCUh0pOJFTIvNalJiyMPGaIB7qUJGCVkZ9G4x1HUa44FM+MrS7diNqVyNzn75SWPC50WJWcNiYy/s1p0zCB2pMKkINcg76qGCy4zd+O6rDuv2ctmHhFa+/vk8zpS0BaNIo/17GVEO9nQceZC5uosCGEV+sK2SxVFv9agP9P4oaGzkEDlWB4GB1DJwBs1py/IBbZm2scoLak0gbfVrMEazx2InzEaGNOPrccCLFgBFQGwgmIXm8QFIDFW+v+0a0+tpwArSLZ3SJADIUqAZtPOjrZLYLoqrHO1XgyiELCdhCS0lwTZEQAOjvIDbbc3A/DOQAlckqkjP9EtM1hKduLNHBFUWzm9cEoCSDADeQLKi8MZQAwCPhd0rOMAZUhuwzeQMdTtLhctgAAZGu6bbkgg4rtZCcUBUBaR8C4jTWh4DAIzA5SzZOQ3LQQ3XQABxTglwq+g+WZ44gJ9AaV/1pJ4w7ntRZ3PRd4sWMXP+1cqEoRc5My1FkCGrtqYV1oCIthIyneyXB5U4AIu7wgESiAEW+Ji5hTYOU9EkPQO4HfoPbC6+Jqudo54pRYdoHnIw+Ab1U7F7bztyjoqwAb/F8jg6QNnNnXKMgHD1x0dKZhAB/6RjZ38Vjz19hkg71t3A8g7MHDhisjrVvJDWEcEgee6v4mNeq4noeyJJLVAht60yQqdJ6QPRRbQ/fhmtPsHaef6ApIuJ906ZOt2V8kOFi565NMgCSswe+Zd2QIZNJ8zBeZIGFbiACQsIJrTP0R8CZAFAqxgAzWfy8uRsHOPbN83J0hErpBjEgm4ADuVV//ak3B9kXMSHEGzAqqiE/onciMgAMHnFJ/VXNiFMjmgBCPwAEmgGwVodxwwAiOAG7vRG0mQA5u2CFmQA7qFgQLAfgW4EehgKwdYbr2wHUZgBAIwAn6nCOm1ATE4AlmHe3jKRQPbcIMkKABAiIFCmDdWIEdFI4RZF3DZ0H3NIQMcIAK2AiY3MIVvcixWYoRfQoIiEBfaIQPZAYVC6FIEACAqgBR39SLkt03WcRRSEoF4M4RtYkwiwQkwwklyJwrh8ENukYUvAE/FUVHxoQlj6CKU5h+GeIhB8QaBAAAh+QQJFABnACwhAAYAOQC5AAAH/4BngoOEhYaHiIUBAYmNjo9MNoyCixWRi5eUNo+cnIuDFRMdPASbmIyfnaqIn0wEBykuOAcAWjqXqau6hyYXPxsxLRRlKROWmLvJhAEELwUMJBsOJDEpEleZyo2Th0wAMUjQSdMkEC0St9y76svshRIiZDQcFAlGFGMbB7buqv2PQy6My0DPwL1pM0xoQ7Zq0YQfSAwQdGCPwrQUChf+azdokYQyEQkmkUhvAw4e2s5ESsREZTaVHVxEnLfDwLwkFER0AKFRk0tJuFy67BBDWpN5NBLQsJhTiIZ2kihBAmGCgIYOWLFmqaql65UOB2LcM5CALMWk8lwU4/lz01QTCv8OSMA64MAFu3LnzoVVggSHvxkgEPx7tkSKEy1xbaRktYddIRLuPsYLOW+JEkgo/DXCgTNgpRlEHFbZ0WWuQQTqAmAhJEWOFBdgS559obUAizQI7gi8lDPFJDmecpvEkFAFBQOwzhZSuzLexynEInGwdGnZJkk4ZDjqAoCOjosFVSAAQO9c5neZO7+7oIXYDbivN2mSYbs9BW6Ls6zUVcvVrADSZZ4LZbQgQ3wJiCFfCRokdtp+w7VkiXhtAaUFALCUIUIS9VFAQWCB5WCLaZ3k0k8r3zEmygwuLLDABjBGQ8IPJ4H3oCH6dUPcMiDwEIEELKywApBzDVkbWz75k0z/L18gAMaTTX4BxVX7pBSeIi558ISTXnTpJQIdeKBFSrqgooWWUXCRphNf1pURmQ2BcAEAUG7hpZ0DDFABnIq4AsAEGhDQHwiREICmnXeqiYGeV3JClSUKzAADDEC8IJkQCnxVRJ1stolOozq6ckVdEgwARBBBEKGqqqj6UIQHF3DaKZ56asTDAC8QUQOrD/Tqaw29AntErIgmGoWbKTXDK7C/NhusEpsau2UIA4ipjQkS+MCssw8IwC20XRQbZZd5urWkEMwyK8AI7HrrrbPRzlrsAN5di+6zvQow47ojvPsADA/44EG40lJBb4rJaHBBusFK4yEJ6zZLxMDjJnqw/zZXLHxEqg/064CCoIngb6+HqmlxvcoovO26JSRIVlk5jdDrxiVPeSctLWH8Aqp9jUDCfPIlIMPITom7pZ1a5qyMDj1sLE00QL+slBH+1izuAKUky0IOt42RVNQvH8WBzEFIoIbRXg4MajcduFgOGUG7PB8DSBiBKgZnF2zttTNsUAB81ZFV3+AcOoCEt3jLmvZO13bQgosPb3eThxxsQA80AiRucqI/IpkwLBtYAE1NGWywQgHhMKCZPCVovrmXnS8EQkwkWIBEQaVbsEABccQBDXU5uH700UkvXSgOC6wAH2hJIJHDAhascLtSrSve6d7JfAJACi+OBPQO2SURo//kJGBgfZfYr8OMBDn0dZ3gg+8W2FFGXIM2m9be+FYKP9Qk9ftl+ZpNfiA8zk0hR466lQvKATYAApAGBCSYvKggBaytrRChOIAA/Pc/qf1vHj2wwvCGhxwCXGsCYeEARQSXFA9K7XYhfN3NGnTBjryiDByYjgN040Cp0aB1EpRSp0qov6nAwwgd+ksDwQaB8p1PAQPjiD+u0AIZKVFBK3SgZmLoJTopilFCAVUlelCCFxnBN6XjUPjsQz0uSstsxWkUCDK2MRcI4I54zGO/DkKdEnhxhEM8xjJYwQ0e5ApViGSXIhe5R6ZU736LKkWjcqGBXMXgkpfMo8gEEIMSxGD/j5l55ASjgIEo1hAmMMjBD1bpl79sxooi6NZlXuBGeZXyC9rgQQdYcIAqbkgGu9lB5WIkAnY9ADZ/LFYDSIk14xVKAjh4wAaQkBkIWBNGVOsXpoqQzNfdsojbaIUhiZADDz2MBFTr2AOc0oN4jbKUJjzlKc5gghkASwCbxCPZitbOWt4pkhphBAGKECxj9itYL7BZDyKwhhBAspnqk0ov7hksfx3BdQzl0gQxUKXsaSI1ugqWCETWK3dyIQL+RJT5PLeLHpVHAhvr2G0gEMsHuFEBRSggGMpThTcpA1vmA8DO+oUPBizgASaFQgQoxikPJBROZ5oCKY8wUosYznn+/4QVF7nQA/SMyUqpkSoGYhAf6ugDC7LqKnryVATIKIBMDglqD8oJsj6uIIizQk5y3IoBAIBVqhR0wxYuwMEEJGEBaC2YtNKXDADUTAI/CyAJWIDXUXaRsbqQk+t2ykAabAB653sjGH9qte1tQHXBC63JlkkuDKzkpxm9WgmaiFib3U+GxeObbRWaAxKI8rbywukVyMSkNdkWAyoommLRBk/i0sK4gYUucI3lAfw4FwXLtSxwI5C1ZFltutpVVBF86o9Cfje86OUoS8srCIVJN7vThYzSlqYB5aIXvOh7SvaIU1+N3ne6kTKh8WCCNfjiFwp9vUWZfKIFrHwAkAc22v/FGjIcejqYtRFmbnX5lJqgGvgJkEQwZj2hDqD698MgPtqfFrWnJEECFajob3Rl+F8plUsTYiSOQCMA2AyjbU5IWluE6Dknh/p4gtydb4mUrJIpDMDINdawCU5JGkNcgcfvjTIzu8vh5x55Xtblk0t4imK0OUVpVDZEpGis5QlXuUwlRqmWJQxRMRPZw18GqJ0DAIJqqRa8o+UTnwGQ1DJ7IcF2Fs8F8Mxm4OpZzD2C1Z8b3VomN06rk74tFAUMVz5jhZsipLQycRto2XUAigX+MqLcnJIKnHrNmdZ0blv9ahWI+sAS4C5UTw1TKYT61mj7UxWSs97MSgCK553zFYT/q+ClRUYFjFY1uTr6ZlX0GQhYlvaodQ3jOB0ABkXWtrhoIRQlneEKKXiB/YCdYvTSq9xL9oZruqlso5kvoqnBAT8N7WhswPncM0hBSnfb7gMj+nP7Jni97XTwakNiLjsVt72rsITSTHHdFRO3AsLcWJ0uPK9mc4T+loABj2vcgjsqUV97LPHLIsA0a5tdpkbN7vCWEMfWjnbL04RyeL/5QdiqubJ7HhXwJMK9/GY39i545Y8D+AJcXgXShR5htSUs2RCeswWvDuWdC9vqOFrMV7pOdVH3vE+N6Gqsy47yC3rjyV4X10pfuw1QQFzhePdxgsHp4jPpPO+rBfber/Ta/zMNvOWDf7Giy55hFt/IROZ1+n03Xuw+RT7p7Kb8g1rh8+KaYc41Z1zYUxHnLDOexlBssdSxLvHU70LGvo49vYc4c5PNPsUX4AnfpaIDJ+dtt0IMNvBv79gx7b4VU5hTyU/dAyGtgPgFV9QEl5k/MfqHFKNKdzQW4NYDy/5q5BU5Q7wxgw2dc3csgL6d/iiFKrR/xPspBA9SMFvqLAVG3K9l+rGwmvT3YOPnQS9flUsXMBbvQwEwsmj/13wFUACnUwAukh61V3n+MDvxEDY20UROUV8pECMwIgMwUgIzQEMIAwn7wQIi0EI+tAHocCaAEz/3VyXpMEknIggAkIJZFP8G88GCNoAtCBI2pgMUQcESPmd08KCCBygBQ3AGQmARLuRZLKBjdMcRqEBITOgCLYSELDgmTdhANhGEpxCGUCF+Z4CCGPgyW3gGBeCEHyQD6PBzzRYU4fEJBJACSPgybsiFbOhDP0BtFldtGzFPdXiHX6iETLiHQOiHhIQiMCeGvcBGibiELBART1g+FGgjMIYMYShQQgCJgpOGAFAPT+iGKVJhpPcS5XYKCnECOeCJX7gCFScBC9BDnsU441eFrNAnPAAoH+GKBsCDWSAQXgiF3SZF3YAl2NICvyBAQNgC0YMZwygDUWhndbiMLmQWI+U+1whClyh1R2gdw1hVOfj/MkkBHFlAXI1RDgyQRUykGU4INlFDU6OxYAQwJC/wAp20AD8YNeBDiGTBRMFRJkPAiqhyAzcQBHc0Un4xP2KzA/6IgUDzAw3iCfR0AiywAHnUMYz0AGJROYQBQGEQkhBpOAswgNswR8zxIr8gPiN1R4zULvgkPgzZQ2ZBAvPoCA3mK+1BApkhPlYUAxGzSHgkAn9ROAGUFDSwQ4gzXDh5AQb5AHb0S+ADIwh4GWIhMv3CLzA5UpKTG4NhkErgAQ8HMLySkL4VDdk4WxhpBBuwSf1iULOlGS1JNkpwAI6yGh3wAqeSSEIZk+hETdGAgDlQUHvELweZKjDQAw1RFcG4djNKUJAbqS/oRAE9KQAhhSoGNTOY0o2JcAJZYAXbNANH4AOsIpTZ+C4hZUyWUmQjQlxtMB4vRVA1YFCIBJa6MiyQISitmWgdMUdDAjC9cphItXImyZuN0CNWcQHDshW7aZy6YBXhJ3I/B1dFCGebmGY4tnvaEAgAIfkECRQAagAsHwAXAD0ApQAAB/+AaoKDhIWGhQGDTAGJOjqKS4yJh5SVlmqTjmoVmiCeGjYVJp5MpIyXqKiMnxoEVQCtrwoDEwodE1Mat5yeqb6Gq1UDAwfFxsfHw8MKnL/OkiATysjUyMMSw1Umzr+MVcgXw8XYxuLiQgMdEgcAFYSn3IcE6RgzReHK9NcS6tjYKQtYqNsWDxWPAwN6CDF2oRqyFAUOuIix4EKHZgUtMdFAjB+xhiBDhkyRwoWLDSVcHLiYEZUJXeocPmyxQMQGBhxEtGghgWBLSy9juepgqx8PDVcuuFhAgoSDDCUobEhhYtLPQ/AEOQrlSRSTTQBwFJCawAGHDBB+sLzaTZJVNRP/ZiygYQTtWQcberK9ujHFDyRN8SbBe8Dn3meLol34u4GDAwo7HuMAcDhVI7AKAMQUQaNxggxOHfC0UZnSI65IFbwAOcOFCMA7yjpOsKFwaUgEXr6UEOHFCxhEliJpMcLI5wxiaJylfcHwYW+8fQMJQqR6jSAjShQoYDOBAQeCIdAYfbvUhAtArCtR4uMBdvc1SACm0KR+krsZXFQpXwFABB/rBeGeezAM6B5nMjhggAEZGDEYYVVVFoAJErzwnoHXZeieAEbQgNx3+BHmjoQAAIfhiQK6R0JZCybRoXcQ5JDFV5VVcAAR16G4oYaDLUgbB2URpsFtJvx34ggpPkBC/wnwbUCGdwzGVpZaWhB544BIClCCAFlSABiXnIEXJHgU6AcCkQO0915UgMUwggD0KYekTR5mMN8PR0jAA5EATBeEABsgESQFRnAGoxECaHnfBowyeg8zpXmimpIOMAClbCwmR5EEK/izQg+gYuABAeURcEAM4l2q6oJ4sZBFLlQ4AYUXtD4RgQKY1KhACi2IuaqqG6zwaq2zygrFrTQeBkIHM4wlHg00ZArttDsIYYWxxRrrgQKLvPXThCkwCtm49WWAVhLocnBBCMRiS8W2vTxXwQA4LLAAEgx49pRUXhKaQhTuYpvQIpFOABEJFliwAXIeMqCdBSuU8C/AAU8xcP+pFyyQwwoQOCUbEiUsYEG+OcCS7RfFDjNijR3UyxQHEMCI7gb3SlVyxVxQMVDBJBVQ04dloWUuvyVI0C6xGAyw8l4VdNACEhDIkMGq0frogBHW4ozBWspK0GtjCvpodaYyZC1FwAqsG6kEgS4n9tisUrAAyjhvG+kBT0sNZdW/UjBx3ZTVeMBN6JpreH1U33z2ycIEztaEGiwG9Vn3RRa2qqCZnPPJCe1lnlI2FSpCoRww2tTU38nWA8VPcM7t4wep+eYDidaOZHEUTAsyBrFuni0xpPxkwgWyY3e7e7fPmbtUAhjt++8REEBwRhT6oGbt8F0nwIZcxlCCCNubnVn/7yh0oAItGMWjGAw5kJBDDj+08MP835MgOpfHe8B6uwpE4EE6znlGFVxAE0bZq1Ezk0pTMFSE/S0uCmnLzMUycp4UXIBXLTAJAmemMQY68IHb+sAEEbOJ3WBjBjj6QVNKV4IlYegGL6Ab2jCgAJ1J4BEtWYU6UJij2m3vREqIIeOeJwUAsqVp5guQ8ZKXIwHBwAWre+AQaYjDHFLoAhFwwXuUQLsmwscFKZgB74j4vM4VRBK7+Z9C4PND2n3vTRJbCC2kSMQLOI4bjJhHBNKxuBwEoX1rQgJUJGbHbAzRWOYb0hm14IFtPe8CAkACEsAkHgcA5mai0lqsItCBllDo/1YOVAoE8sUZBoAHCTlwHgaKUEPykS9pWvDWLwjwPwSgLVxIIBMZJlcALKAsbfQYnzCR5UlHvqF1yLQCCy4gHzEEzX2uSlk+kqYM/0mPeuqAVcVYwBRqlcyXJ5Pg1rY2ABUAYHrq2xr5yLiCbqJLWBVjl7t6EL2scKNpvFPnELPAAiHkQDvgbMDR0KY04WVTAo4cqC8XElCFrtOMnuyA/jJJxpNdCw04cyU9KWNPAU5Uf26oqDxlKFKBQqGR2+hoN4Y3K1Zm9KXJdBcxv0UAULr0mK6EqdbqyZbI8S6hOg0q8L6VCAJk05BB1anK+AKWAXyAoiZN6iGXCruPSlWpHv9YmhUjkIa0HTKmSaXqEUEJyquKFJaPmxAfb2rWiu3Mc0cdY1vB+tbHzQIBSC0pWGdY0MMkBa8g3atgvyoqrebwr1CNql611le+6CByUNjoXMEqVr7QMjNlHexAK4ZWz/EAlObM6Vw7u5crkFWuXw0qab81r/EBVbOK5WxjvwUAdsxqGLakI2wpW5hkFVOuq5xsTAvr24Isa46vKCJqY5vU/k2huPH4hjDPVo/l7navnOQLNmAlzEaK1qzpIE1LNJBZYdajlWkQrv5k6YvjTkG3kXUqc6+qv1DEY0Kc5C4dVWBd+GbUiIiJxgxSIAFQTZcKAwBCf/07xegFuIIWtCP/ADTHBRWENpnzfWn/SNVeo0ogXGMpAE16SbdyLhi87YAuIvojkRaI58UdS2UNe3AGrn7wuu4SFYfZKwgK4cDFEHAWWiypMYt4QMG53axUnasVWXoDBxsQD0pacLpooVIlq2EXeoXrhP+dqRLDW8AYICMCseSgLkH6QUNesGUu56ywlbCB08Y8Pxek4ySm7EwqLwDS5Lr5CWmTHnT7Mpf5lWElM/gLYDKIkPLiWKd2RKcirgAQQ1vkVFD7QQoE0oED9NnPjx5sXd8RuZKUYdNGbcEYFoCDIX2yzYvFMZMPIali8OATEEnlNij06T/LFBRxvvUgmkYSRbYW1FygcKhz/3wRHmNC0kZNsSiQm9plb+5WuTLuLGBd7SU7uJivZXCsy5jVn5CX292+rnTFa9wB9BqZ4tbpjHl6xpqiO97prscUMjKhpH3X2vD23UoMO8twA/ylB1CkcbOJ74P3oDnOvgRkUzthLod3vNT2dR3viMe7ajzg1FUbvxv38ajWsNMcpmDGP17Dynbc4Bqvwh5pC/ODgzwCE7hKUhoOcJVF/BIbqfmfI/1ziQudy85VsTN2XnJj1SPl4z26zd1dpavM495cRsg1hedIrPMc3tns6dHNMFmJomCsJ/96vkVu0JWnO9Z2LC0fFzdhA5NUp1eQQlGc6ll6SGA7gC/ACj5Vcf/RTnjw63BkAK1IXoAg0IDooCHdWTB4nzElB2IUtIT6DWTxCA1dKtmH5Zkirh9M5svlcRoEBLW3xyT8JSwIl7iGLJ7TS4gQPcBBqt4GgRUMQRAaSAFk+OYdJJSBa46dtO5376Pej8gGLKDP276jZqinFfjhgtbbkLCClEe/b7WxPlMxYSMnTR8JP3DcCqI8fbz86zZNZtvlfIR+CQyCBb26VLSghYNOwn8THfAD2ic2nWF/gnAC99J+aYF8LPMDaPE2eGGAAIg6BOgAarZ4liUBDth+FMACuCd90zcVexIp/SE/xOcjGVAAVacGLDAbiNN8PzAjPBMV84eCc3N/L/L/ggtCAek3CkBXdD0mEbkzfc2nggDoMTpoAGmRcFVkGsDQCGjEA6rnK0Roge2QBUxBhAvCAVShCs/2hY0QFMTgGgWQS7/CKu7jNeynhRnQAhj4DloRh1rRP8DBRTHgGqczNJeDF4pyghAYLMIjBNShHhfCIUZwFzLjIFTYBGHQiC+IBL3EbydgIQIQAzvCRHBkSTLwAzQ4gBAYN++nPgDgFyr0A6TzPaPjJl1CAoniPXloJ564fxTQHPHATznAFJKELpOzA16yAD80O5jYijbRI1ZTfdxgKjegJZwBGZK0AwzzJUyEP5gIR5HxTNtzTs5gAhbCRbXjIPYTZZvIJQ8QwAMxcD8coorHEwTyARlbch20WHBHQB3UcQM3kCWJkjwhQwK5QwK8yCipqD03EAPy80PsIQSo12EKcQFFII/zSI/VcQP5uI+VYi5JgAQLAB/1yCUBwkri5wvQoBnr8Bvss0z16EaFwigOsnokcDsCspEpRoJH8XuCyJD2WInfkz3vEWn/ZwhZcAHSASAPSR1IokRHYEdvCH+lMApagAXrUAQW4pBBxJFDoHQ7CQyhQAAKQQzWAgJAWJVWyQpU6QyBAAAh+QQFFABuACwBAAwAbgC1AAAH/4BugoOEhYaHiImKi4tMAQGMkZKTlIOQlZOOl5icnZJMnqGio5WajaSEjqirjSA6ijoVoJyzhZusuJiunqq2t7nAq6bBxKSPgrGwx8XMvJDDyDY6vc3VnUwgJjwV3LsgGt3W4pTcGh0SB+fnClVVAwoENiYmblquteP5FQQSAwf/6foJHAhgXQd2VWTlG1fh3IAIFwBKlDigokWLB+CBWGjNRIQBHWaciYiu4sSTEQ9UlABgo5tfHFnZuIIO4AWTAHH6u+gv5Tt6+GLiihUSp82UJ3deKPKC5U2XQoE90lJwYE+VKG2mSNEvIr2oUkF9CwnxnxCzK61eVdlh2zKwwv+WVbgCoJ0GAlMcpsXA9uAVAvM2voU7atrgQq4CA9ZWhcdiqISlfjpELfLCR5grv4RpWZwmzdE6MwP9sp49xfc4i5a5aUK7eeYEgvQL+NXqYo80XIhQtoiP38BhwDjy4kK828GkTbjwm4iS5kFqSA/i/LmSAQqRy+T3wsf06NEfiB8/ngiMltpZ6QZyQ7p49+TjiycyI57q9JQCAPgN/8EI+eQJUJ4Eu+AXin5EBChfdALK9xsG0hjIiwIJiidgg+GNMAKGDqInYSkvSVDhAwJsKEKAJWDI4QNKFHHch5kEAMIBSry3IQkUlOBeCRCQUOKK8wkBFIyROAJCBxWOIEL/EgyQkaMAApDQJAdQAkkdgfcRaQkkV7zAIAUJiJFAAk9y4ACZVHIIw3svaJClloQ05IISIjggpgFhZmBEBk30SUOaAAZxQAVwFlkFDlGOceaYfeLJaBM0pBjoGQQUyggICqSwAAR2Ptrop2JQEGgQMFRqKSwS5FAAEhm0SsOYNLSaAQ2vOoAEkGsCYeqpvtSjgAsbUCBsEhxQ4EAGxQ67QxIUNLgmebryaogq2GhKQgEWMIDjsQussEABK1DAwQYNqhmttL7EckAKIhQQxwrbcoAEEiWscIIFxELpX3g1+KDrm0SCImMHW5VQgLhJnLlsEjFgiy+5G+o7X6kAw/jM/5E/LLAACcmOiSyxzIrbrJLExvDev+hG8wgAOBSgLQezMkqmrK5mAOUCTZLwH6kvpowZAD+M0aOxMhfNqM0PUDCGtifv6vPAPzggg5meNlo0DSVu0KQRJ19RILqOmCBB1MxebXWjoQporANcz4dlysjwcEALDog7a6t4no02lEo/yWbP0mIjdwtCj7vD4QbcqbfNUfrdIBHGVWwgNgBshcTGG8BsLK205p2ngBtryKEPVQRlqQlXHECiCKwb0brrsFPtAAMU/FfAAjuT50MHNqBbgQLdgSe6hsQXb0QSSECg4wMFkACgDz0ILPltDXlnMpQbkvhjxCUuKUKDzQO5e//vmFk6Ew4upNBCCTn8QEIJJZBwfAmuc2AE8ePdLj6BoRXqCsH/0BTmNkBAZhFrXiUiz8YCxb/A1cM151hXlJJnQGHRLoHaax6/BmQCaJgvMSZggZfiV8ACJuF7NioBEnIQqCN0oIOmg1NmNAAEBlXphvqCkgiQwIDlPQ87DnwJNzDgHfIUDz4CWFKTTBYoIkDPNv4LG14w4IFRwYdkDGAAEoxAnP6U5wKEMp+MVoKBHlxgX+GJz4bAZCsK5MCMXpyPhwrFpQgghC5HYB0Sv3ejMB1rAwXIAgY2WJ4X8soECvAAFaLgBbq4gAIFiMHOVHjChIkJWQUAQBd6ECgfAPH/VFrwgAI+wAUoAIAFOUCCBRYAJRLwsG6zi1WxLBCCRgrBQZ78iqUQoEgn+HILXxACB7Qov1fJLHkkWIAmweCFLmzSS2nMJSj7gYBflrIHKtSi52BFAUCyAAvNrKUze+ClCgHhhYf5EAFEWctShjMHllwcCS6gSXe285RCUMER3qOAe8gwkaYsIxrcWQAjGPNTmOwBOE3ZSAwQRAJeahNkiGSCdDBSAhgIpxOwSbS8JbSdT5DCFAZQBJCU0pkYAMILsgOnK9ixlkKwpymFuagmYHKh1jRjRpn5BSv8JZ8d9B9AvWCGmBKVofCKmZ6UyVONYqAIUBCnNc0QgSmc7qUb/x2AU78AgI3RjgRG3WoUHNrUsnrAkC2t6kV3ak0rFCAHCygBU8taTyGwFZiMbCYXIqcl3Wi1p3/VaENzANdlHnWRPfUCO2VqzbNqCRtYNSNjo/oFhxr2sHr1AlnzGtKcGsdiOjgHYofaVsHWE7Pu1Gk1TdtIURKpS2zdLGoFO9vMeiCwpdVsfSSEut2INKqyxSxIOcvQtpJ0tb/tbCntiB+8DOC2d9yCXWubW+VmFgHAG2Vb7SmBqt6GCRpI5Ee0m9rFVle4w+XsbZGb26rGUCixmAJv3jEF4oJBsj49r34P+1T7ytQDHpjoaCCziXkAAMACRcFs8YvX/bL2sEWIrv9wFTCojpiDHdu4xz4ekg7yZtaeazCvg/cL4PRilrnNEBv60DeDm+gluNRt7V3xWpcRH9YDbTIxXivSDBuwAAfuI2ALyvCDH5QBBmHdrzsrkl8aXzax+30BEBRKXSoGdSjIqAK7OAVLZYkgyaktbnE3uVhwsmAFVMbpfiGqgl5OlquifO+BBGGCLbOKczXN0WmTW2UVUPnMt+PKCljC0wbwWbkqSHRT/EtZhwq4MPXoAA6MdTgwXa0EaQ4zY8uIgUULQWMEZN0CckBPKltXAT1QAElvC+YwMxKMwZDbD1hlBA7Y+miQ+oEEmuxqKqAauvygJzw5RuyNyfUmOHUogKH/O+bqtiMdYdyOBOinOWQdDnE02EAOoOzOKfwaIhoBbwQIloMYkJCA9uOYqsCZT7smmL36rYguhcGGFJQBR0ezNbb1zGsFdOAA49ZknBz6762gWwYUmFc3r1WA4kBZxw9WQASchoqB4UAGSKgbrDjnqGwLYbXKBgk4DiEBReLzdjiCwJ2zHeoFZCHGzr7t14wB3gu0AAJjsPZByZS3UXOhB8/9yczLx+CesmBj4yobrbqZgj0j9sF67TQApveJAHSgDJbW9w5oZSdOQYACPzjCO8Kdiv4dKc33PfqSOI4nj6t5u5OVOTAqSjepFQsCU1v6uIrcdJYioheYmjEWHkaG/zF5LpnglHAjFdwOKSj7ABSveAdmXTd50Y51dRNBCxbQ4WgrI25/TS28ErbNbG+b25z9NUh+EnlUeERKFDhe5UcgpQ3ggAUnCMwSioQMGS2WBf3gGJ8c1XYInJ7bqqfvXx4tDJv3aAO2IkEMYqA0XQ/p79PajBumcFbADpvLsYoZBArggl0DV9lFcK8/U3wAF2RzA6wzGBJiMEeYxHATA/trqr5VQVsbcCsR9lys5lB+Rj5yhgsAMAMuoDExkAI2hwQbMAPo8QzIcAqWwAN/BXTDxjHotgHfMmhFMIDc5V0MwQ8ukD4FR35YMguXQBr9MwhW8Ht2hWYSgGYskGr1pP94jJQG/jBv1YAN5wAYCZgCLjABHpR9tlAakRZWNbZQTYheJlYF6TAOs5ANG4E6dcF8qWA65VMPIvZmMHdq7qUPEbIlzlAPTDZVqfeEDQaGI9VA+fALFcMZqqAbHmZj+lVjinSAlpFO0VByh4aHebiH6KIBkRWG1gVzVUCIh6Rq8CaIg+g10mICX4iIlriIkjhNuOWGkMhQjHhVd3iJnOhLmAhFcHIkm9iGnThbA2CEp8J9gZiIsoiH7uCKQrWJhjaKvaZfn9hXh5iLukiLvWgxoqWGYvZhq1iKheJSdzWLziiKw5gfMRFsx5iMeSgF0RgjHGGI7aCK1khdtWiKmED/dTQHiN/4jGrYiuIYI3yYCwHADzpYjdeoi9l4Cn7IDA2RivJ4jqSojuNIjqvAjPUFhsFYkHFWCgApefq4i/woY1r4d/eIjwEXiw0Zd5mYH+04FO/4i5bojXjoj9qYkKPgEc0oih45ij8BIyBgUgzZkehoXP2kkg41WgXZkmHYD56HH0wAAAtZkbKIDj6IH6pWjTX5kun4SR9yYPtolKuIk6/lZj5JYrzzlEzpk06JHIehlE/HlGZgjVf5Xb+QgB2wlC6pX8Aob6IQkblgiGPZbWVZlFCAlgcikpwgNhnFhm95iXIJIxi1ldfYl5zFaNU4UjFJJKp2R3iZeMoGbo2H/2o32AM2uAJoVheo5m/j9pC3IV8qIQQF0JngIpmSmU8Q8VyjKYAChDka8y0XAGD0BZIq+Wwv8D4k8APxozE58AIfcRe6+Wzud3AduADldxdX2DsyJDY8QgGukgQFVH5B9QqCI2kIh2ecQ34KQJdggX8NcXNdx00Q0AJw+Icp0FEdVze3l5FgOQhikwIysCgdRyuwhhiTZ2ml50Y8cCrDgCkpgG/ziQMTsIVi8wPySXw98p0BExrgVQA8Qnwd5522cQwVBaAK2nYb8Db2GQ0A0ALQlzeNggQtAHnah4YQGqEO0ALRY54SogHquXMSmgIagBgHEKIKCgG6hpla8p/GpP+gSYADhSlELwoBEUom5XkNJuoZk4cEhkd8GfADLdGCFZWgCio1LPqCynCEkfENKXqjBkADHAp5VSg3TqqgG8ClpeGCW5IZ1umOM3EA+hmjZSCmOjAB+cmeHfcDHmqGFvihkfGO9QajbZcAHKqkgkEAKRqhSACox0CmdqqEfbgcF9cp8ykDYnoCObCeWEor/NkL6dSCy0Cl15me2/KjWSqjbUEAP6Z07dkCPIB/h6GptcCCefo7WyanEToGEfhvQCaeK3oCckiHm9qCUZEMi9GjsASqdVMCLcAunxqhMpACJwAi1jAYz3ALv7MbM2Bva8d2Z5Nt5lYCMjB8P0qfQ/r/q9OiADBQHTWSRMezb6FKK6yzAd6KJ2FgNQZwOXVaKARQBNJxRKKjQ8fDKrZGPxuQcbK6nxLgP1lQMPTDOtujr/JDIg8QAyRQQFxnAPFasaFafn34CV3yALSJMMQyP/Kjr0fEr7JjsVmaBFFKGGpJCLpxrlFyPASUcRkHMTcUA1UysksioiUgJC3FHMKTREmUcPOyAf5xPPMDOwKyIcRjUBuXbQJAoTJZru1BPFBibtOXQBsjLIYjP/FjI9R3ZyUTBG0SroShBf8mZftyA2obHWsbBO2jnMiTLMmDQUnUsCVSI0EwRwGzD1XxAmvSL9JRHdwTP7LXIxiUr/+xtkQAigRfgKhYqal4AXwkcUvUka9VorBo9B1p5HBLcKaekSXPYA8PxBSZe0SZKx3FcZf2cKie22OwYAvZQKr59LfCEx3EgWxdsLpmSLargambMUNAdwH7dLt9ubqOyyvUIj2/qwpa8HIKdRyt+yF8yLrLG70SMr3Km6hgIxNw0yvdGxOf8b1hQZfJYA2BAAA7'

const MAGIC_WORDS = ['homer', 'kwyjibo']

let spelling = ''

function generateJesus() {
  const jesus = document.createElement('img')
  const WIDTH = 111
  const HEIGHT = 193

  const top = (window.innerHeight - HEIGHT) * Math.random()
  const left = (window.innerWidth - WIDTH) * Math.random()

  jesus.width = WIDTH
  jesus.height = HEIGHT
  jesus.setAttribute(
    'style',
    `all: unset; position: absolute; cursor: pointer; top: ${top}px; left: ${left}px`
  )
  jesus.src = DATA_URI
  jesus.onclick = () => jesus.remove()
  document.body.appendChild(jesus)
}

window.onkeypress = (e: any) => {
  const letter = String.fromCharCode(e.which)
  const currentSpelling = spelling.concat(letter)
  const isCorrect = MAGIC_WORDS.find(w => currentSpelling === w.substr(0, currentSpelling.length))
  spelling = isCorrect ? currentSpelling : ''
  if (isCorrect !== spelling) return
  generateJesus()
  spelling = ''
}