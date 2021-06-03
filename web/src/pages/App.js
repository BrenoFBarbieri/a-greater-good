import React, { useState } from 'react';
import './App.css';
import Header from '../components/header';
import Card from '../components/card';

import ArrowLeft from '../assets/seta-esquerda.png';

function App() {
  const [idScreen, setIdScreen] = useState(0);
  const [modal, setModal] = useState(false);
  const [objRef, setObjRef] = useState({});

  const ObjPessoas = [
    {
      name: "Rebeca Santos",
      msg: "Meu sonho era poder ir para escola, ter todos os materiais e uma bolsa, me ajudem por favor",
      img: "data:image/jpeg;base64,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",
      pix: "84419227348"
    },
    {
      name: "Renan Molinari",
      msg: "Gostaria de ter um jantar em familia",
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYYGRgYGBgYGBgYGBoaGBgcGhoZGhoYGBocIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzYrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALsBDgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAgMEBgcBAAj/xAA/EAABAwIEAwYEBAQFBAMBAAABAAIRAyEEEjFBBVFhBiJxgZGhEzKxwUJS0fAUYnLhBxUWI/GCkqKyU5PSQ//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACERAAICAwEBAQADAQAAAAAAAAABAhESITEDQVETImEE/9oADAMBAAIRAxEAPwCn4asWiAAnH1HO1hOU6AUhtAKNovTBTuHBxlHOz/ZKnVMvNuiQyiBupeGqvYZY6EJN1oKir2Wmj/h3hIu3N4wqn2p7GDD9+i23IXVq4P2icLPcrUaTarZO4UJOSKUmjD+Ah7HzlIvurBjcU5xAcrdxXg7Gd4AKm8SeSYAupylZoyx6Hf4oZBPIKvdoK7XsytEkp5zHuZuDyUKphy1k7hGMlZk7uisUeAYh2jPdTKfZnEflHqptLtI5hy5NOqlDtW/ZoXYqZJykgv2R4RWo/MBE81b8zunqs8/1k8aNCbf2zqn8IQxiLlI0V9Rw5eq4a7unqs3f2srHYJv/AFVW6LYRBkzRH4l2tlHZjS4xZUB3aaqbWXafFa/zaA7kG/gtigZM0gPdHzBIfWMTmCzp3aOrpnP/AGj/APSS7j1aPnlHGJsmXylxAl0Spuc/nWW/5tUBnMl/55V/OUVFGyZqIv8AjKW2kPzlZUeNVfzldHGKv/yORxQLZp+IpsIgu90EfwCiSTmN+qpg4k86vPqvDiTvzn1WcYvqGh6zg7i2n/hZsR2Uw93G58UFx/C6LGnLyQ/EcUcRGc+qGVarnfiPqtpAcpSe2EOHlpEEze3qtf7LkPDM0dw+Atp4lYRhJFRoH5h9VuHY+oxzIOrXTEwNLXUJRplPPjL+x0j9Vx4O0DmkYOconqfMp0J/gvGKY2Epq81eAToRlHPZOl+UJP8Ao6lyVoDglArz9/p2N/4UXEdiRMtcR5oLxPs3VpjuEu6LVSmn0gdQjlJcZk4vqMlwPBsQ+5Barhgn12NDeitDaIGgUXFUCdAllKTDSfAHVzu+dRHYFmpCPtwhOq9/lQKnTYP44/Su/wAO02AQXiuFDAeSvo4c0Kpdt25WTC20NDzp2ZvxDBQ4kKM2kUWqVA5qGuxDQYldEJyaoE4K7GHUikOpkJypimqP/EgqyzZJxidun8NSc8w0QOf9/wBEjDUjUcGgHryHUqyYfDEAMZ/1P5DfLOp/ekBM5MTEZw2BazcOdzNz+g+vgk46kT8x85v6qc6m+clIEn8T3Gw8SvOwjWEOJDnn8REz/Q0f3KCbY2NAVnC3uItI/pdflJiylU+EOOhZ4CSR4w5TcTiCBDnEdM0H0GnqhD672PzB5AnaJ99U9MSkT3dnyfxhp5ZHT7kBQa3Aql++x0bEljv/ADAHurDw3iT7Xa8coh3oZlFK1KjXbcBr/wAzTlcPQxtug5V0KjfDN8bgKtMjOxwHOLeosVFDjzWgV8NUpfL32bjUHxbp5hDcRw2jVBLQGO8O5P8AMNW+IMdAjkDD8KiKhXcx5p7imAfRMOHh4c53Glwh4rlNTe0I1RNpsJU+thS1kqHgaokDqrFxkj4PoptvKmPGOrK5hR32n+YfVapwmnNMkXl0WttKyfBv77P62/ULbezrAKItq6R0m09TCM+jR4Xbg7IpMEkwN9VNH3UbDWaACDzjnunm6nyWQr6PBLSVxUEKdQr1NEZwRMd5AmY4MMuU/C4tznWFtZXlKUV9PV94/KDYAXoTTCnGlWs4mqPEJskJ5JyBYyYgMCVlXSE2+qBqtw22ec0Kn/4gNYcO64mDCidse2Io9xh7x9lnHFO0FWuCHvkckVBtWOni9gJ2Oc0Qh9R5JlO4lRpXdCKW0Q9JPgsFKpOuksbyIHiY99EW4Pwxz3BzgAxpkmR3iNGiDfZNKktixbekHuGYUMa0RL3Q4jqflbfpfwR8MFNsE5nu1i5Hl9B4ISKgYcxcM2s/pP2Hmk08Vmf3rCZyNgGP5ncz1suXpfgZpvAEerQASOpJ7s+PuhmNrWLh3AdXkkud0Djc+QAUl5cQCAGt2aLnz5n1KHYzCuc7vSTyuT4uJToVgarir90W5u38Ak06hPifEwOafxmFIOn2A8rkqCyZt7b+eyomI0SPjFrpY4g/fyRnBcTzQKjb/mHdd66FAMT8wH/r/fVT8Kwg6jqNj4jn4SlkGJaWVGkSHyN+Y8QoWIfDuuxG/Mf2PsmHNaRY5TtBkT9L/uFwy4HmLEfoDspPRWrHqzWPYQ67N4+amfzD+Xp+zTOLcONN3Obhwu1w1BBHS6sDKpEx83jqOo/5Tga1zDTf8urJBBbJkgHlNxyJPNPCVE5xsqWFMEFWWvUz046IPXwDmPLSPA8xsQrf2b4dmALhZD1mlsldaKlhsK4Pb3T8w26hbT2Yquc1rSLN1vsbBRK/DqZpnuiQCRa4su9mKxbSzfzlvWA6QfdIp5bKQpKkaBgQMgPOT6kqRTH3KiYQ91pBMco2UtpVYsVocBXUliUU6EKLxfhT6zYacvWEV4JgHU2BrjJFpRdrQlheavNXbO2fs5KjgaugLq8qkLPQvL0r0rGOFCuN1Q2m5xMQCiZKqvbitGHf4JGUgtmPcfHxHueTqUGBgQieIcSh2KZAsuuPKFfbIFYpgozwzgr8QcrHNzbSdUU/0FiZAzUf/tFvEAT6SrZxjpslKLlxFbwDC54AnW8axurbTAY0ueZcYgXMWkgDpI90jDcFoYeo0Pc6tUF8rWltJp/mce87wEKLxTFFzib6wAO6LchsFD1eUkkV8o0tnXVCTmiBzJv6nRN/xTQdetr+4UBjnPIGt46f3U5mC72Rtz0+pWrEZ7ZOo8RcSAM0bd98exRSCWZmzOhjNA8y6+9yhmF4doC3UxMTfyKK/wCXll8p9vYE291lIODAOLa6TJmdpB+ihlpG1zvyVkdw5zjMeu3LRO0+DHcSR+l/AALZGwKtUoEQ7z/RTAwWJFjYxqI3HqjzuEFwLgNBmNtb6AcohKpYDuxuJj9EMzYUDxSZlzB0Xgj7xskUqD5MO+UgHwPyuHjp4xzU1uGB7pG5HI+vkvOwL2EOa6QRD9Guym+7XDWYIH4QgzJAzi2CewhxE2zA6yN/3C7h6BqszCAfwjS49r6eIVkwXDnOzfFeHPgZQDLQBMCYEg9BoUEwdL4VV9EzlPeZ1zDM0dDt4hGO1QstMldnaDa7wx93CwnWwJjws72V7w/DhT0CoOCrhldlQSO+0uga3vb38ytYGVwBsuf2VOzn9I7sEYhhggDUH6KP2SpMe1xf3e/lto4AC5RfEtEGOR+iCdl2PN8uYZiPCybx+0Hy+mhUGjQREQIT7QmMO2zSBFpjkn2ldUUGR1k7rsroXE6EBjZXQ4rwSoXmo62eDyu/EXWtXS1HYro616S4pLSlhbpqobMoTx/hhrUyzmEbXVqCpUY/iewlbYg+SHVuw+J/KD5rccoXMg5KilJfTZRfwx/sp2Cd/EA4hgLAJANxK1/B8IpMaGtY0CNgF7IAn2YhMmm7nsSbdVEzP/E7htOiz4zAGvd/tkjWDf6A+qyJ7j8xm8/8fRbh/ifh3Pw2YCcj2uI6Q6/rCxbGNERe2p8Qm8mraLJf0THMOIdPIKwcCwpc3MT8xuUF4c4PgRMa9OvstB7P4UNpgGDEx4dUs27oeMVVjLQGjKxgdOoPenysvN4TUebgtB21Hnb7q04Wk3YBTRThZJmcgDguBPbBzDwi/qZhPO4cwCDckgSeZKOOFrKJXYBqbAsj1IPui0CyFVoNktA0GnjEKr4io5gJjQgHwE6+uvUK2lsued5AvygITjsKRLw0ukQ9u5GxA5gGI3CVtjKipcUrsyl4sTBAm46hIw3FyWEGHWJki+gdcjoXBQ+MYQtJDDLdR0G4INwUJwdQguadwZ8wR91RXVk5LZa8FxMNOaZlwB5gaAHwle4q9r6jHaTaejpcB5PDx4FU3C4kh0Hfunx0+sIq/FEsbe4Lh7T7S5HcWJ1DgxHeINjv4g/qPdapwLE56LH82g/qsaqYkOfI3H9lrXYZpOEYT/N594wVL3XCc1qwzUcMrj0P0TXYx4DYO73OtygXKdxLIafAqH2dZL2NmGOaZjnAt4W9kPH6JD6XSi8bJzMmaNDKAAffVLLb+y6th0PMK84HZNgbeaS/EagDQ72TJ62LW9EYtXYS2hKleekXsaAKWAlrhKagWILUmE6F4hCjJiQlSkgLyxjq8V4FdJRAIK4AlkLiA1kTHUmvY5rhLXAghYv2r7OnDv7t6ZnK7dsHQ9IIHkFttZkobjuEsqsLHiQfXyQycZWisWsaZhfAWRVynQg/ZaNgy1jJcQB1VTdwV2HxuRw0zQfzCDlcOhCM4nLRZ8SrmqX7rNRO1h/dVtSlYy0ix4TFsPyvB80QbiAdCs1PaUGo5j6BYGAyGxmbluZEgH2Vv4XiJDDBhzQ5pIIJBEiQdD0VHFxFUosPhxHVRa+KEQWyFLYy0oTxN72t7jZJMAc/AwfpsUaNaPU6taXFtMFpM/Nf3TjarXWILXfldY/3VDwXbCtLRkaZe1gAe4O70iYM9NGx4SFecNihVBY9sOYYc14h7T4aHo5pIK0o6BGSbIONwjXSCJB/cql8a7PuZmqU7iHAt3HUdOi0luFtzG0oVxSnAPglWgvZjNTW9jv0It+ilV6ncB/mPuP1U7jPDHOeXMbIJDbDVx2Ht6pdPs1iAS1zYytzEbfKXR42jxVm46ZNJ7QPwVAucIGy+g+z+CazDUmDZjfUiT7krH+B4E52s/G/umPwTY6bgErW6dfKzLpaPBcfrNSkCdRSRJxdMZXf0n6Id2TYSAeTSfdKNeGkk7FSOx7RkcRyA9U3jWyUV0sLHXkcvYpZJj7Jmg4nMIggwPBLD5mNjC6EZocau1GCbxK7HJNPowBBJ1v43TxiK2RxUSwUyvB68+zpxHg5dzJovXMyNgxHQ9dzJkJ1jlk7A1R3Mu5l4hNkrMyVi0gPXAV4oBodBSlHD0r4iKYHFi3MlQ67HNuFKbVCTVqAC5WdBjadFa7QFj6ZLmd9kFjouLib8olCP4Rrw0nUXCKdoOLUwxzJEulvrZDMFig0Cd00HsvWiLW7J0KlT4lQEkxmaJAcRpI8h4otjnd5mtgBeLAbACw1Uik/PpomMXh/9xjeck+y6HK0IopMLUKgyAJGLoZmiBdpkQSD5EJurSc0CPZScNWDmwbEeqyl8A4/QHhOzGHD/i5DnzZpnR3MDQa7BHWYJrbho+58SuOJC6cSE2SqjYv4M17CyrfEXzPMSjeLqAg3VXxbruEzrfn1UW9jpaO8A4aKkyTDCXiPzSl9tsW2jRAiXPGQbGCZdcaWBHmn+CB7aJc0CCTBmXG52281Xu1jzVrNBIy023kwATc+gH/kmtIDehfZSmGuzvhoAsPHnPRGuJ8ZY1waHCTyVEq8RJccrraDqBuUwX96SbpF43tnD6TykaGzHgt+YXCLdkMTAcOgMeeqyduLfMAmFp/ZQauA1bAPXX7J4wxG8n0vdCoYmZvf7pvDOnMeqTh2mY6TJ8EoRlNo1gp1Y7om/qF0aeZTNF4IBGmp8Oqi/HLXGAbyfKVROhGjwavBi6HL2cLz9HTs9lXg1czhdzraNs7C9lSfiDmvfEHNbQKZ0ykGUovC614KKi5cA5KPRslJDlIbTBSK9KNEz8pJWaPpF6GSUlzlExWMawS4gKu8Q7X02TlMkclKm+F6S6WXE4kNEkwqNx7tVcsabdCq9xrtRUqyAYCC05cO8qR831gyXEP4viTnE3VtwDy9jHc2tJ8SBPuCqLUaAbK1dlsX3Mv5DHkTIP19FRxpGhK5UX7hlGAJMpnGN757x06Tb7eCXhX21UTiOKDSHO062RXBmnkEKOHdEOeRItksb9TKeo0Msy6Tz8EFZx9hMm8jZwgAcoRLA8RpPsxwPMbjxCdCyjJdJ82UauLKYYiyGYmrI/415FKxokDEvPkgGMfr6IriQZ5oHxWplBJSx6GWgjwzjuG+CO+GOZLHsNi4tJAcBvPMKn8cxgrOcQSGuNhzjQn2QtzpSWm6ql9OaUrVDTcOQVLZTlLqRaE6y2yZsi/NDEZblbD2ToZqbYMNd3o8DfzWPVmErT+y2KLQyHR0O9tAgzef2i/B0eGWygnEwIHMX2B5JLsUA93enM1uWLtaYMgH96oZ8SHGNe8b6HyRbGSDVHE/O4CWgQIFjJUGpiMvekHQak6yfsmsPiC9ggQ6+hsTpHqlkEOIIGjbbWEI2agViePBo1QbEdon7FV1+Izbpt4XKoI6bD7O0L93J49pn81Vsq9ojggZMPv7SVOado8bquPzKuBwRHh79UJRSV0bIuuAxpcBLkTw+IGZUqhUIIg2ViweIXLD/qSlRzzi5bLC6qNlDqY+HQRZMvqRdDuIYqxVvX/prgkYAvt1hS+nnY4yL2Ky5tU6ELRKnEHPa5rhZU/FMaHkjmq+UslZWN8YPZTnVPuZay6QkPeqjEasneE8Q+FUBPyO7r/Dn5G/qkVWzoo1SkUaTVM1tO0a5gcQC0EEEESCDIIOhHRcxuBZUILpdG02Hlos44Nxqph+78zJ+Q/h5lh28NFeOF8YZVEsd4g2cPEfsKVOJdTvf0K0sOwEdwkAdPonxw6i4hxZJ5k6J+lihGmoUnO0iQmUgyk2IY/LaZGygYqtM6eKYxmIIdbQ26n+yhV60CSQEt3oC0PYeg95hgzOAJ2Fhqb6D9VFf2Tq1HzUe1gBEADOZJFzcCNbSjvZl5+EXhriXuMHLq1tgJMWzZkWZTfmAyiZJ+beI2uNl0+flpM5vb2dtLgKx3ZahVaWlgHdhpawNyEARlIB3ExO6yjivDnU3uYRdpidJGx8xC3f+HcDdw3uGyR5lUrtp2bq1S19BocWgzJDXO3hoiD5kKk4PpGE0nTM0pUSEuq8hLex7HFj2ljhYtcCCPIqJiHkKFFZSSQt9aAtK4TTa6iyAc4ANvb6rMKkBq0zs/Uimw75QB6BZ6E8ndlkwNB7RLmmZcZNuWnqm31SHEGLg2gWB6p2jiy4hpm0kH6qHXrQSSJsRAF76wsVCGCYWhrxBa7veQTlatLnEXkz4KPwWo3IwZpEAE7bwlOOVziLAnda9ArZk1N6fbUTLWJbaamUHUnVdAKWGLGG3MT1CqQITLwnaL4F1qtUZsm08QTAB0RfD8RyAAqqmrlMp3/MRC8qfg1LQU1RdHY4uGqF4zFGdbIOOKW1UPFY+RYofxzk9gpIJYitnMNQTH4VzDJ0KkYHE3k6IjxSu17QIXqeEFGG+k7eRVHvKSxpRN2HmzQm34cjUJ8lweiE4kaJDxuVM+HK13gfAMLSY17KTc5aHZqgl4MCbP8AlM8oTxi5CSkomW4HsviasEUnNafxP7gjnBufIK5cJ7K06VJ7Hh73vg/EYchYRo1pOgE3JF+XK5Zs7gNOv3TdXECn3XMkETINyJjvA6aq8fNEn6NlLotrMLmNe1+Rxac1jI6iQn2vxJ0Z5hzf1TeCYW1qn5S9xE8pkexCMTGi5JKm6OuL0rBTcHWJl2UHm50nyDbKfheDMHeqTUPI2b/27+al4akXusJ+iIsAmGEOg95w+VvOOcfuE0YSfBZ+iWibh2BrQ0SYGg2UihUGUGJcbxy8TsEywAiA8HnBi3XdPnKwDbkB9hzXbFHDI9VqkG4mbZdPMKO7EEiDI/6ZkdCJTzA5xlw8uQ69Ut7GiwMHcla2bQD4twCjigM4v+B4+YdJ3HRZ12p7H1cOw1Gf7jG/NA77OrgNR1C1im8gnK0kW3tPNvO2vqmsXnBDi0ZXWLR6zcaxIQlGMlf02+Hzs6m511q3AKZLGj8LWtPrCR2k7Gsqf7mGhlQiTTIysfzgfhdO4t9VN4U1wpBps5obI3kADL1vK55xcSnj9CFJ8SQJ2+0+KYx9QMZnF3gkcoGU39/ZNMcdZj7Xj00XO0LJpZgLANHjzvtqlXSz4S+CtApZc1wY0/E78JF4+b2Umu+4PMXtuo3ZgscO7MZwBmiZyAGYtYyi2GDM7wdiQB4FBrZkZG1SKSZbCcY3qkKD+RcLF5rlzITusEQ9qh4iqQiDwBqVErtBWTA0BcRi3clDGOcNkddhQdkh2CHJHT6hcQHUxziLArlOo87I3/CtGyUzCzoEVilwFETC1HhE6eI5hJGGhLZTSNJhocZio0CTUOa5XsoXDZZRSdjUWDsbwnPV+IYy07jq86QOmvor+6lmuZ848lE4PhW4bDsaYDi3M6dS43Pp9kt2Oa5jbEyZ/LItESuyCpHLOVvQvFVyx0HvSBJOjero23TLxlzEnMHRM6nx6Lra2pLXZvKCfGTAATL3ZTmc2AYHd0F4m8c0Zb4LEFVcPleY+V0Ob5yI9lKw9CbkwBcnl+p6KTjA0uaGgmAdLl0m0TAAtqSBdSsLhYu9hHQd5rfCDc8ypLzuRZ+tR0Iw7CQAWlrYytafmfJJlxGgg6f8IvSpNDYHLw/c/RMMLSZEbhoJm2/r9E9TmY/ZVnH4Ry+iXsGkAu2Ee56L1JhbeASRGsR/TO2ycoMBlw3J9ASBPS2m6ltZK1taRtfTlCIJFiNQVGq0s56DUc/HponsU2BO43GvQDn4JnD1I+a0XJ2dPL9Oaa7Wui1WxbmTy5fvlrovVqjZyxnIMwNvE6Jio6XnUNPegHlYydrT6p7JboPT038/RK2oug02rYNxgaQQRF4y2IAMXBHUeKr7IaHakioQTybYifNWbFgkkX7zHDe8aKtUWdx8RdzY5jYgqXq7SK+XWK+HJcAJsJk6/wBlF4u5/wAAiTB5cuvNTKD4c4HSPYDZP47AfEouay05R5mD5aKUelXwi9m6bmsdMgjKYOt7g36Qp4dcum5J3XjSax72tOYdxsgzOVgHrZN/DEXO6z6ZFBq8Ge1jHh+rM1TPZrCfhFre4C6/xmNuNWv2C63hNQOLXPpggwZeRlBe+m1xOWILmOAAJNxa9m+A1HGr8z7y4993eIIEuvexIvsSmG46oYPxHTJfZxADnGS4AWB7ztOazx/DLL9CdHhji0HM2cpcQc7SyH1WEOBbP/8AF2nonBwx5AyuaX53NyyYc3LhyxzCWjX+IE5iLbWKGtxL9M74tbO6O982++Y+q4MQ/wDM71P8o+jW/wDaOQS2vw39v0m/wNyXOBaGOqZmSczWvLCBmAIIcDJIsATdep4DM0PHyOD8txnltOrUbsAWk0XiRyIsU02s4uLy9xcNHZnZhrvM7pD8S8nKXvI5F7tzlO/Jzh/1FEOyW/g7gJD2SM4eS4tYHte+nkaS0Xljrm1tV48HqEgDJdpcAS6YAabnLAJLgBJ1UH+NqfN8R8/LOd2maY10TjsS9uj3jb53actdO6PRG1+Gp/pGFMG67EJY0SSkHEucvApQSXIgEqfwXBurVmMA1cC7o0XcT5fVQCrn2AYMlepHeAADtwLmEYK2kCbqLZcsXTl1jECD57II9hECT8xjpa0SeoRSk8lskyYF/IprICdNj9WLpa2zljwWMKCL76yZO15TWMoktzMYTkEwJu7YW1ROhoUzV+R3ifotjRm6ImEeJENynKC4d4EEzrmuDABg80QqsAZAPecY/W+qb4dTAbpukYj5x/T9wtWrBds6MMHbD729Er4eUEguAAsAbe4unqW64/5D+90yT/TOSE4F8BoMbgH6A9URaPVDy20dPupGBeSL7SEYu7/wElQus64ab7n7e/0UarIe0DqT9BrvJPonj8zvEfv3Uf8AG7+tvsCg9My2O4juta/UtI9DYhKDYB8I/flBTrx3XeB+ijG7QDf5UWjJnsQ35TEwNv30VOouOV4B0eQBFoBVlx7AwEtka6EqrYJ5JffUkpPbiKePWLqEF3KAR4qXW4iKTGOdOQPYXhoBJAM/UBIcwZhb8R+ig8UvRPi0rnT2i3xk7h+JfULnuETM26ACeVk8JJ8v0SsBoP6W/wDqFMqUxJty+i3dm5o//9k=",
      pix: "01511174305"
    },
    {
      name: "Vitor Hugo",
      msg: "Tenho 13 anos e nunca tive uma boneca e gostaria de ter um jantar em familia",
      img: "http://imagens.ndig.com.br/psicologia/garota_fome_africa.jpg",
      pix: "57790424166"
    },
    {
      name: "Yuri Martins",
      msg: "Meu sonho é ter uma bola, me ajudem pfv",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLyTwxCT3AwUMqJ-C9hCYTiA97SFSPctzwA&usqp=CAU",
      pix: "15664014981"
    }
  ];

  return (
    <>
      <div className="App">
        <Header setIdScreen={setIdScreen} setModal={setModal} />
        {!idScreen ?
          <div className="container">
            {!modal ?
              <div className="content">
                <div className="subtitle">
                  "O mundo seria um lugar muito melhor se doássemos<br />aquilo que temos em abundância ao nosso<br />próximo necessitado."
              </div>
                <div className="container-card">
                  {ObjPessoas.map(obj => {
                    return <Card obj={obj} setModal={setModal} setObjRef={setObjRef} />
                  })}
                </div>
              </div>
              :
              <div className="containerModal">
                <img src={objRef.img} alt={objRef.name} className="modalImg" />
                <div className="modalContent">
                  <h4 className="modalName">
                    <b>
                      {objRef.name}
                    </b>
                  </h4>
                  <p className="modalInfo">Para fazer uma doação é simples, basta fazer uma transferencia para o PIX abaixo no valor que desejar.</p>

                  <span className="modalPix">{objRef.pix}</span>

                  <span className="modalVoltar" onClick={() => setModal(false)}>Click aqui para voltar</span>
                </div>
              </div>
            }
          </div>
          :
          <div className="container">
            <div className="contentAbout">
              <div className="containerAbout-img">
                <img src="https://media-exp1.licdn.com/dms/image/C4E2DAQGt2e1zLo77vg/profile-treasury-image-shrink_800_800/0/1597850436834?e=1622764800&v=beta&t=Dvb7EUco6gts0eQHGBc-nWAo_x6zyOkK_Wk8uNfyMcg" alt="Foto do grupo" />
              </div>
              <div className="containerAbout-info">
                <h4>Sobre o projeto:</h4>
                <p>
                  A ideia da nossa aplicação junto com o Projeto de Vida, foi criar um site de
                  doação simples, útil e seguro, afim de contribuir com a sociedade nesse
                  momento tão difícil, onde qualquer ajuda é de grande importancia na vida dos que
                  estão precisando, faça o bem sem olhar a quem e a vida lhe pagara em dobro!
              </p>
                <h4>Curso:</h4>
                <span>Análise e Desenvolvimento de Sistemas.</span>
                <h4>Projeto Integrador desenvolvido na faculdade:</h4>
                <span>Unisal campus São José.</span>
              </div>

            </div>
          </div>
        }
      </div>
    </>
  );
}

export default App;
