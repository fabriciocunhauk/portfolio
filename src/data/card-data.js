const cardUrls = [
    {
        id: 1,
        name: "Colonia Malhada",
        imgURL: "https://github.com/fabriciocunhauk/Projeto-chacara-colonia-malhada/raw/master/src/images/front-page.PNG",
        link: "https://projeto-chacara-colonia-malhada.vercel.app",
        github: "https://github.com/fabriciocunhauk/Projeto-chacara-colonia-malhada"

    },
    {
        id: 2,
        name: "Todo React",
        imgURL: "https://github.com/fabriciocunhauk/react-to-do-list/raw/master/src/assets/images/desktop-preview.jpg",
        link: "https://react-to-do-list-seven.vercel.app",
        github: "https://github.com/fabriciocunhauk/react-to-do-list"
    },
    // {
    //     id: 3,
    //     name: "E-Comerce",
    //     imgURL: "https://github.com/fabriciocunhauk/React-crown-clothing/raw/master/src/assets/Readme%20img.png",
    //     link: "https://react-crown-clothing-ecommerce.herokuapp.com/",
    //     github: "https://github.com/fabriciocunhauk/React-crown-clothing"

    // }, 
    // {
    //     id: 4,
    //     name: "Interflix",
    //     imgURL:
    //         "https://github.com/fabriciocunhauk/React.js-interflix/raw/master/src/assets/imagens/Front-photo.PNG",
    //     link: "https://react-js-interflix.vercel.app/",
    //     github: "https://github.com/fabriciocunhauk/React.js-interflix"
    // },
    {
        id: 5,
        name: "Loopstudios",
        imgURL: "https://github.com/fabriciocunhauk/LOOPSTUDIO-LANDING-PAGE/raw/master/public/assets/design/desktop-preview.jpg",
        link: "https://fabriciocunhauk.github.io/LOOPSTUDIO-LANDING-PAGE",
        github: "https://github.com/fabriciocunhauk/LOOPSTUDIO-LANDING-PAGE"
    },
    {
        id: 6,
        name: "Movies Search",
        imgURL:
            "https://github.com/fabriciocunhauk/React-Movies-Search/raw/master/src/assets/images/front-page.PNG",
        link: "https://react-movies-search-alpha.vercel.app",
        github: "https://github.com/fabriciocunhauk/React-Movies-Search"
    },
    {
        id: 7,
        name: "A touch of angels",
        imgURL: "https://github.com/fabriciocunhauk/a-touch-of-angels/raw/master/assets/images/a%20touch%20of%20angels%20cleaning.PNG",
        link: "https://fabriciocunhauk.github.io/a-touch-of-angels",
        github: "https://github.com/fabriciocunhauk/a-touch-of-angels"

    },
    {
        id: 8,
        name: "Natours",
        imgURL:
            "data:image/jpeg;base64,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",
        link: "https://fabriciocunhauk.github.io/Natours-with-CSS-and-Sass/",
        github: "https://github.com/fabriciocunhauk/Natours-with-CSS-and-Sass"
    },
    {
        id: 9,
        name: "Be-the-hero",
        imgURL:
            "https://github.com/Rocketseat/semana-omnistack-11/raw/master/.github/bethehero.png",
        link: "https://be-the-hero-oficial.netlify.com/",
        github: "https://github.com/fabriciocunhauk/be-the-hero"
    },
    {
        id: 11,
        name: "Proffy",
        imgURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhAREBEQFhUXFhgSEhgVFxcXFRIXFxgYFxUTGBYaKCggGBomGxoXITEiJSkuLi4uFyAzODMsNygtLisBCgoKDg0OGxAQGzUlICUtLSsrLS0tMi8tLS8tLy0tLS81LS0rLS0vLS8tLS0rLS0tLS01Ky0tLS0vLS0tLS0tLf/AABEIAKEBOAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQBBQYCB//EAEoQAAEDAQQECQUOBAYDAQAAAAEAAhEDBBIhMQUTQVIGFCJRYXGBkZIHMlSToRUWFzRCU3JzsbLC0eLwI2Ki0jNEg7PB4SQ1giX/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQIDBAUGB//EADoRAAIBAgMDCAoBBAIDAAAAAAABAgMRBBIhBTFRExRBYXGRocEVMjNSU4Gx0eHwohY0cvEiQgYjgv/aAAwDAQACEQMRAD8A59euM4QBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBASWdkuAKlbwXtU3db3BXsiTOqbut7gpsgNU3db3BLIDVN3W9wSyA1Td1vcEsgNU3db3BLIDVN3W9wSyA1Td1vcEsgNU3db3BLIDVN3W9wSyA1Td1vcEsgNU3db3BLIDVN3W9wSyA1Td1vcEsgNU3db3BLIDVN3W9wSyA1Td1vcEsgNU3db3BLIDVN3W9wSyA1Td1vcEsgNU3db3BLIDVN3W9wSyA1Td1vcEsgNU3db3BLIDVN3W9wSyA1Td1vcEsgNU3db3BLIDVN3W9wSyA1Td1vcEsgNU3db3BLIDVN3W9wSyA1Td1vcEsgNU3db3BLIDVN3W9wSyA1Td1vcEsgNU3db3BLIDVN3W9wSyBWtlMCCBGxUkiCOyecO1I7wX1ckIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCArW7IdarIENk84dqiO8gvq5IQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBWt2Q61WQIbJ5w7VEd5BfVyQgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIDKAwgCAIDJKiKsrXuVhHLFJu/WzCksSizP1Zqw26DGfKgOYwuiIi89oiZxmIxWJ1o58n7+6EX1sRLKSZQGEAQBAEAQBAVrdkOtVkCGyecO1RHeQX1ckIAgCA3dLglbnAOFndBxEuptPa1zgR2rUePw6dnL6/YrmR7951u9HPrKX9yj0hhve8H9hmRqLZZKlJ5p1WOY4Zg/bzEdIWzCpGpHNF3RZO5ArgIAgLWjbBUr1G0qQlzspwAAxJJ2CFjq1Y0ouctxDdjcaY4H17PSdWqPolrboIaXE8pwaIlo2latDaFOtNQind/vEhSTZ60XwLtNem2q00mtcJbfc6SNjoAOBUVto0qc3B3bXD/Yc0jR6QsjqNSpSeQXMN0kTBPRK3KdRVIKa6SU7ldXJCAIAgDIvcqIuk4mMZH89OT2nq5sVVtLT98GQz1VNNgnkuzycCZ2CGVyY2TGEDNYVKbe/wDfnEjUiZUaS65N3CJBGO3Auf8Aas9PNb/l++CJR1WgeB7rTRFbXNYCSGgtLjyTBOY2rn4jaXJVHTUb267dF+BhdWWZpLd1/g2PweO9KZ6s/msPpeXueP4HKT4Lv/BodKcF6rLVTsweS1zL5qhjrrYvSDjsujb8oLSxe061S0If8etPXv0NzD2cHOXcWbJwErGsGa4GndLi+67AiIaWk5mdh+SclhwmLrUal23Ja6N/7JxFSOTRala36B1dV1I1Wm65rJJDZvC9eg5NG0rPU23WU2oxSXXf7r6HlcXtjEUq7pxULJpat9KvfetOux70Pwe17wwVWtlpfODoh12CBEHb1K1HbdWUrSin2XX3L7P2tXxFTLNR3N6X6HbXVm6d5PSMDameA/mtr0vL3PH8Ha5SfBd/4PPwfmI422JDiLjoJGTovRPSq+lHe/J69v4I5SfBd/4I7VwDc1j3ttLHFrS6LhEwJiZV1td31hp2/giVaUU5Nbuv8HHArsmyZIUJp7iFJPcYUkhAEAQBAVrdkOtVkCGyecO1RHeQX1ckIAgLWix/HoA/O0/vhY63s5dj+hD3H0HyhaYr2c2YUKhZe1hdAaZu3I84HnK4mzcPTq5s6va3mY4JPeaDg9wntj7TZ2PrlzXPDXAtZiD1CVu4nBUI0pSjHVLr+5ZxVjccK9HMtGkbJReXBr6Tg4tgO5IqOEEgjMc21auDrSpYWc49DXkiIu0WUdIcF7DQLxXtb2uILqTJbeuxhe5JmSDjA5tizU8biKqThDtf6wpN9BHongpZjZGWq116jA4B3JLQ1oJhoxBJJw71NbHVeWdKlFO37xRLk72RasHBfRtcllC1VnOAvQCzAYCYLBIkjvVKmNxVJXnBJfP7kOUl0DgJo+lStVoa+oddTc+m1o817BEviM5jbtUbQqznRi0v+Ls/nwE3oOFllsRq1C+1VtYalMVGXuSxpcwPIF3CGSc9nYmDniFBJQVrOz77dPERvwN7paz2XidnZUtFSnRApim9phzwGG4CYMyMchktOjKty8nGKctbrhrr0lVe5zGg+DNmtJtbhVrFtN8U3At5YuzLpbiZ6l0cRjKtFQVldrX9uXcmjm9A2NtavRpPLg17oJbEjAnCZW/iKjp05TXQWbsi5wt0Syy19VTLy2418vIJklw2AYYLFg68q1PPLj0ERd0aVbRYygEIDCAjuVHPDGANEFznlpc0GcGwCMT1rk7T2hPCuMYJXfEvCGZn1fgKCLFSBib1QGMvPPOuTWqOrUc2rXUX3xRptWnJdfkjfLGClWtdJzixr2F4EkAgkDCZjLNY5Si9E9Rh8TTdXklJN8LmLJXptdcvsDzBuyA4jZhtSDS0vqWr4inyvJZlfhfUWrRlBzi+pSY5xEGRn0nuGKl04t3aNSpg6FSeecE32EdCw0mEup0mNMRLQAY5lMYRjqkWpYajSeaEUn1IuWnznfvYrLcZyqCZ/fbgrkkekq12m6ASXA02jAYvBEknIDPsWtiKvJwuld7kiY0eVvC9tHqfLtIaPdSgODhsMjaOY7V2NkbZnjqk6dWGSS1Wu9dPdpr1m/WpKCUou5VLpXbjCMW2jUjTjFtrpPKuXCAIAgCArW7IdarIENk84dqiO8gvq5IQBAW9E/49n+tp/fCx1vZy7H9CHuPpvC+w2WoaDrZWNNrb4aAYLy65OwmBd2c4x5/P4KrWgpKlG7dvlvMUW+g1FgoaIpVGVWWg3mG82XOInYYjFbNSWOqRcXHR9RZ5mYZpinadLWR1EksYx7LxBF46uoSQDjGI9ql4eVHBTU97a+qFrRNBw+P/AJ1bqZ9xq3Nnf28fn9S0Nx09ax1K2iKLKLb7rtMgAiTdcJz5sVz41I08dKU3Za/Qpe0ipwC0HaKNpfUrUXMbqnNkluJLmEDA8wPcsu0cTSqUlGEru/kyZtNHng6f/wBe1Rz1vvNU4n+xh8g/VOc4YfHbV9Mfdat7Bf28OwtHcdNws/8AVWD/AEP9ly0MH/eVP/r6lY+szPkxrNLLTSvAOJDgNpEESBtj/kKNqxeaMugTGheBb7PXoVatelDXckCZeYIDRP7wSvtGNanKMYvXwDndGp8pHxz/AEmfa5bOy/YfN+RMNxyy6JcyEBn97EB5cYxKAis2kQ1xJaYiMDjsXO2hhXiqagmlZ31GecdY+J9B8mun21WOspEVKc1RjhUY9xkjmIdAP0h2c/HYfk55ludvlZW8jBKLTb4lrhvpQtDbOwxeF6pG7sb24k9nOuNiJ/8AVHm9u4xxSoQe/V9nD5nG0qhaQ5jiCMi0wR1ELVWh5mMpQeaLs+oVKhcS5xJJxJJknplRvEpyk80nd8T6Bwf0lr6QcTy28l/Sdju0Y966NGeePWe42bi+c0E36y0f3+Zatdup07oe9oLsGg5n/rpyVpzjHebdTEUqcoxqSSu7L98zZWhzbxlsnrUrcZiLWM3faUWqumGmt5yfCzhLRp1qNna8NcHNfWzdqwfNvdBEmM4jtx18Bi8RFOjayd3fe7dC/fmbFCcIJykm+zxNBwr0xSrVLlOqHgNERNwEYloOUn8gr4HA4mjjIYmcW4erbpWbTNbhx4LXcjPGrGdNwWnb0+ZoqFIvcGggZSTJABc1owGfKc0duMBeuq1Miua7djx0SDg0giYIc0OaccciFaEsyuSFYBAEAQFa3ZDrVZAhsnnDtUR3kF9XJCAID1SqFpa5pgghwPMQZB71DSaswW9J6Wr2i7r6hfdm7IaIvRPmgcw7ljpUKdK+RWuQkluKSykk9itb6T21KTi17ZukAGJBBwOGRKpOnGpHLJXQ3i3WypWealVxc8xJIAmBAwEDIJTpxpxyxVkErFvR+nrTRbco1ntbMxySBOcBwMdix1MLRqO843ZDSZYdwstxBBtL+xrAe8CQsawOHX/X6/cjKjX2HSFWi/W0nlr4ILsCTOc3plZ6lKFSOWS0JauR2q0vqPdUqOvOcZccBJyyGCtCEYRUY7kSWLVpevUpMo1KhdTZFxsNAbdF1uIEmAYxKpChThNzitXvIsjY8E9E2a0OqMtFVzHC6acOa29ne84GSOT3rXxlerRSdNX47/IiTa3G+0LwRFCvSrOtdAhhvEAQTgdpOC06+PdSm4KD1/eBVyurGi4c26nWtbnUnBzWtay8MQSJJg7RjHYtzZ9KVOilJWd7loKyOfW6WCAzChNPREJp6IlszWkm/ERkcj0LQ2m6vIpUk7trdvS3/gnko1Flk7LqbXiibgy2yU7QH2x9N7ADybpLQZEEiDIGOAnYtSrVxNSChCnJcW2k/qVlTtFJS3d7Oy0a+k+u63WKlTFFjuLPuMFMuphjKjqkEAwHPPTyBmFzMXTrUpRzu+l2r7tX9jG40opznvSet/m+q+m85rSlpdWfWqEw50lvRkA3ohu3oXKcs0rs+d1q6r1pVZ9Ov2XcSaJ0cazrjSAAATPNIBjpSMXJ2M+zsBPHVskWlbV34X1t1nTcKqFNtKy0qbYLqhh10BxAwiRsF8DsCzVUkkkdrbOGhRhSoR3uW/pt+tGga+tYqj2Awbt2YwcNjwD+8wqXlSk0ceU6+zq84xer8V0P960bzQOhHF3GLTJceU1rsT0OdPsCzUqLbzTOvs3ZspS5xidW9Un9X5I6y1ecf3sW0tx6E8Wd4bevFg3S6InZ++hVkktUJztHV95wflM0Wx7rPVs7GOqOvMqCkAXPycHENxPysTzrobOxMYOSnKyt0vT9d/ApTqxz2vvX0/2+457QvBeq+0NpWinXptuuN4NwkCWi/i1buI2hTjSdSlJPqv5bzcSuVMQdoIkHLqIIOBHQV05RjNAxzkkknMnM7PsUxioqyAUgIAgCArW7IdarIENk84dqiO8gvq5IQBAEB7qU3NMOa4HPEEduKhNPcDwpBlrZmNgk9A50BlrSQSMhn0bEuDzKASgEoDLmkGDgfzxCLUGEAQGICkGVACAIDJKqoJNtdJWMFFtrpMKxY2rOAtZ4a8VqUOAd8oReE7B0rlT2hBSaaehjznf8EdCiz2U0XOY4l7y/CGm8AIjaLoAXLxVZVp5raWsY52mmmtDNu4NUXU6jabaTXlpDXY8k7CtKVKNtEc2rszDunJQgk7aGhpcCKzYIr0pGIJc+Z55jBYObzON6CxF7qSXZf7F6jwXtb6lKpWtDHhjgcX1HGAQSBIwyVuRldNs2I7IxLqwnUqZsrT1b49Z0dbR7HOaXimXN80kSW9S2Wk3do706NOclKUU2t3USmz7C5qtcyHuvXcHEAqEiSDjruf7FbKgU9LWdla5rWNfdJLZHmmIkcytCcoXyu1wm1uOX4S0eL0mvs00pqQ/VktvSHYmM8QFv4LLWqONVZtNLq5khJ3OMAJk9pXblOMLJ9JM6ii0n0/v79rmFcuCgMIAgCArW7IdarIENk84dqiO8gvq5IQBAZCA2HHmXgS13nNqE8kFxa5xggCMQ7MDGJhYeTlbf1EWIa9rBp3OV8jCRdbcaQbo6Zk9POrRhaV+3xFi1W0k0OfALxeJF4iIvNN1v8pj7O3GqTsugWPHunAA5boIJLji6HF2PfhM5dinkhYwNIxEXzESSeU+A6C7tcPCFPJXFjyzSOV68cGjPEOAc0vE/KxmegKXS4fvULHk2wXr3L8y5ekXwd8HnOXUTjtTk9Ldd+oWJLRpEOa4XTjhnn5vKOwkRzc2W2I0mmncWNcsxIQBAEAQBAZAUSllV7XKyllV7X7DCksfS6VpFOzU6jsgynPQCGifavMSpupWlFb7vzMFrs2tC1CnN6o1g53EATzSVqykkrsxVKsKazTdl1nv3Xo+lUPG1Y+Vp8TBz/DfEXeh7r0fSqHjanK0+I5/hviLvRLR0zZxN600Dzctqh1YcRz/DfEXejNXTVnI5Npog/Taiqw4jn+G+Iu9HN6W4e0aNU0gKtSAOVTuFpkTAJOK6OHwbrU1Ui1Y2qUo1Y54NNFerw9pEvdxa1C750hgLcMoLpyx6Bisq2fLRZl4/YvkNxYNLWepTZV11Jl5odde5oc2cYcOcda59Wcac3CT1WhqTxdCEnGU0mussPtFN/wDh1Kb4zuOBicp9vcojOMtzL0q9Krfk5J24M0fCICpZKhGzleB3K9gK38H/AOvERT/bo2I6M+fL0VzNcygBQGEAQBAVrdkOtVkCGyecO1RHeQX1ckIAgMjpy2oDZPNnkxdiDB/iGMcMNro6VgXKW18iNTxVNJxmWDB2ADxP8MXAMIkPBnZjtUrOtP3f9ge6j6MQNXm4skVIg3Lt/bMB2WEwoSne7v4de4EFq1V3+HE3jvSWy7HHAYXcMT7VeGe+oPdV9EXi0MJxuD+JEXmXb0xyrt+dihKb3+XX+ASVqtG6Q2HRNwG9BxN0nLYQqqM76jU8VtRdcGwCTgTfw5XUeTd7fYpXKX18v3eNTXrMSEAQBAEAQBAEBLZqd513nwHWtDaNepQocpTeqa+a4HP2nXq0KHKUnqmvmr2sdjp98WBgO1tJvcGu/CtDAtVMTnW7V9/+zYozVS01uav3nrTdQjR7L55ZbSx23uST7AUw9OMsW1a6u/MnJGTs1ddZxOsPOe8rs83pe4u5E82o+4u5Gb7ud3eVHIUb2yruRHIUL2yxv2IxrDznvKnm9L3F3Inm1H3F3I9EugGTHWsMVhpVHSUVmVrq3H5GGKwsqsqSis0bNrLx+RA4uBLmht45POLmiMmzg0zjeGOUEbcrorct3DcjajCMVaKsuoha2qLvK80ENBN4NBEFt0yIIwIyIUumtSbFiiSGgScBGZR0Kb1cVfsRjdCk3dxV+xHZcAySK5JObBj/APS5O04Qg45Ulv3LsKOnCHqpLsVi7oQ62zVqZ361Mz/OS78aw4hqFWFSO60X3aeROZO0o6o46vRuUwNpxPfA+zuhYsLilitoRnJW0eVfL/Z5zC4tYraUak9NHlXDf4vV9xTlemPVBAYQBAEBWt2Q61WQIbJ5w7VEd5BfVyQgCAIAgCAIAgCAIAgCAIAgCAIAgCAls5bPLXP2isS6a5vvvrx8Tm7Tji3TXNt99bWTt1Nl9tEfI7tvZz/vBeVqYmrUco1pN+TW7Td1P5nj6uJrVXKNaTfVwa3abup2tvbsb7TtopvoWdrnNMlhIDhgbkY8wxW1h6lfRYb1ra2s9PmelnUxPIUVh/Wkk+jdZX39CbX0KvDS3MdqaVNzSBL3XSCB8low6L3eF2dlQupVeOi8ztQi1vOYXXLmZMQq5FmzdJXJHNm6TNIYxE9sLDi5SjSbjLLbptfwNfGSlGi5Rnlt02v4cSZ4EXRzznMc65dB1nU5aT3Ra1TjfpV010Pe10buk5OHdd1eXk02otapxzdKumtLPe1pbdfU8V2gRDSOshbmBrzquTlNStwTVu83dn4idZycqilbhFprvIV0DpmSOZVi21qrFYttaqx1/AWo0Mry5ohwcZIENAxcejpXI2om5wsVmm3oe+Btuv61hwODhljmD17FoVcBPCrWV0/A5uAwNXC5oylmTd1Zd5qdLUAatWSLt6BBwI+TEZ4R0LnUcVzabnBK9+ndb88fuzzbxPNcTOpC182jeqy8FbpfS/uzT12NB5Jn99C9Zga1erFutDLw6/kerwFfEVoN1oZeHWuy7/JEt03wgCAICtbsh1qsgQ2Tzh2qI7yC+rkhAEAQBAEAQBAEAQBAEAQBAEAQBAEAQHsVXCIJwyWtLBYeTbcFd79DUeBwzk5Omrve7ET2ySS5xJk5nbmslOhTpq0FY2YwUIqMdy0QayDMu7SSrxhGKtFWRY9qwEoDCAyDmqygm030FJQUmm+gwrFwgCAw0ETDnicDDiARzEDMdCq4Rbu0D0CRiC5pGRaSCOojFTKKkrNaAwwkfKd2klY+QpWs4ruRidCk1ZxXcgsplCAIAgCArW7IdarIEdhYS8AAkwcAJKqmlvINlxZ+4/wlWzx4i6HFn7j/AAlM8eIuhxZ+4/wlM8eIuhxZ+4/wlM8eIuhxZ+4/wlM8eIuhxZ+4/wAJTPHiLocWfuP8JTPHiLocWfuP8JTPHiLocWfuP8JTPHiLocWfuP8ACUzx4i6HFn7j/CUzx4i6HFn7j/CUzx4i6HFn7j/CUzx4i6HFn7j/AAlM8eIuhxZ+4/wlM8eIuhxZ+4/wlM8eIuhxZ+4/wlM8eIuhxZ+4/wAJTPHiLocWfuP8JTPHiLocWfuP8JTPHiLocWfuP8JTPHiLocWfuP8ACUzx4i6HFn7j/CUzx4i6HFn7j/CUzx4i6HFn7j/CUzx4i6HFn7j/AAlM8eIuhxZ+4/wlM8eIuhxZ+4/wlM8eIuhxZ+4/wlM8eIuhxZ+4/wAJTPHiLocWfuP8JTPHiLocWfuP8JTPHiLocWfuP8JTPHiLocWfuP8ACUzx4i6HFn7j/CUzx4i6HFn7j/CUzx4i6HFn7j/CUzx4i6KmkaTgG3muGO0EbOlQ5J7mDceTf49T+hU+6tDaHsH2orPcfXpXAMIlAJQCUAlAJQCUAlAJQCUAlAJQCUAlAJQCUAlAJQCUAlAJQCUAlAJQCUAlAJQCUAlAJQCUAlAJQCUAlAJQCUBw/lXP/j2f678Dl09me0l2eZkp7zmfJv8AHqf0Kn3VubQ9g+1Fp7j66uAYQgCAIAgCAIAgCAIAgCAIAgCAIAgNVwk0zxWk2pcvkvDAJu5hzpJg7GlbWEw/Lzy3tpctGNzmvhBd6M31p/tXQ9Er3/D8l+THwgu9Gb60/wBqeiV7/h+RyY+EF3ozfWn+1PRK9/w/I5MfCC70ZvrT/anole/4fkcmPhBd6M31p/tT0Svf8PyOTHwgu9Gb60/2p6JXv+H5HJj4QTtsw9Z+lPRK9/w/I5M6DT2nuL6qKd++CcXXYiOg864FWrybtY4+0do8zcVlve/Tbd8man37H0ces/SsXOXw8Tmf1E/h/wAvwPfsfRx6z9Kc5fDxH9RP4f8AL8D37H0ces/SnOXw8R/UT+H/AC/A9+x9HHrP0pzl8PEf1E/h/wAvwPfsfRx6z9Kc5fDxH9RP4f8AL8D37H0ces/SnOXw8R/UT+H/AC/A9+x9HHrP0pzl8PEf1E/h/wAvwb/QWlOMUzUuXYcWETOQBmcOdZ6c86udnAYzndLlLW1tx4fc2KuboQBAcR5V/i9n+u/A5dPZntJdnmZKe85nyb/Hqf0Kn3VubQ9g+1Fp7j66uAYQgCAOyMZ7EBQLbTiJpHDDPOPldvMMlOhJJUbXl1004+TMz7E0IPYbVg8phM4YHLDE9OeHVkgI7to5PKp/zZ9MDLq7ZTQktUpgXomMYynbCEHtQDCAIDDpjBAR337o8X/SkGbz5PJHRjmgMF79weL/AKQEjDIn/mfagOW8o/xal9c3/bqLpbK9q/8AHzRkp7z50u8ZS/Y7LTc0F5qSTVi6WwBRptqHA5kyRM4Z45LDOck7R6vF2IZXt1NrXC7euljHiSCReYHRIgHPmV6bclrxa7mSjYVuD1Vrni9SIYCXkOwbF6QduyMsyFhji4NJ667iuZCnwctBnktBBLQCRJLSA7LYJmVDxlJdIzI11qszqbrr4BgOIBBi8JExtgg9q2ITU1dFiB2RV0DvOHP+W+g78K8Hi/WXzPH/APkXrU/n5HLLVPOGxp2EXKbtVXfebelnmjlOF3zTjgrWN6OHjkjLLKV1fTdvatufAgNjOuNFpE6zVAnLzroJhLa2MDoPl+Si/wDtl8bE1fQ1VrS83boAdemAQQCMHQcZiIzCZXa5lngKsIubtZa3+V+nX8npug62BLQAW3pnISBlnMmFORlls6vpdW0uRW3RVWkC6o0ABwacQcS28PZ9ihxa3mOtg6tGOaa6beFykqmqd3wE+Lv+td9xi3cP6r7fseu2B/bS/wAn9EdEs53AgCA4jyr/ABez/Xfgcunsz2kuzzMlPecVwT0jxe0tq3L8NcIm7mIzg/YujiqfKU8t7F5K6Ps1htGsp0qkRfY18TMXgDE7c156ccsnHgYWTKhAQGHtkESRIiRgR0g86AoO0YYYG1Xtukk3cAZG6MMM+086tcke5hulpr1jiDJdzNLSOozPWBntXBE/RDrsC01yY2uMOPK87oMiepLgkdoqRBrVpkuDrxlshogY4Dk7N4pcAaLMya9YiCLpcbpkk4jbEjDoS4L9JgaGtGQAA24AQMTmoIPSgBAEBh7AYnYZQEfFmbv2qQZ4uzEXRiCDniDmETad0D1SphoDWiAMAFMpOTuwcv5R/i1L65v+3UXR2V7V/wCPmjJT3nzpd4ylmy2+rTkU6j2gzIBMcoXSYymNvQOZUnShP1lcixDWrOeS57nOJzLiSTAgYnoVoxUVZKxJ7NpqHOo/Z8o7MvtPeoyR4CxjjL99/iKZI8BY8OcSZJJPOcSrJJbgeHZFSgd5w5/y30HfhXg8X6y+Z4//AMi9an8/I5Zap5wsUbdUYAGPIAyAjaQTPPkM9gAyU3ZmhiKsFaLt+38vLcQBxBkYGZEYQeiMlBiu07o9uruIILnEEyQSYJ51JZ1JtWbfeZNoflffsHnHZkhPK1N2Z95ipXc7BznHGcSTjzoRKpOWkm38yNQUO74CfF3/AFrvuMW7h/Vfb9j12wP7aX+T+iOiWc7gQBAcR5V/i9n+u/A5dPZntJdnmZKe8+eaN/xB1H7F1qnqmRn23QfxazfU0/uBebre0l2swPeXViICAIAgCAIAgCAIAgCAIAgCAIAgILbYqdZtyqxr2zMHYRt6Dn3rJTqTpu8HZkp2KHvZsfo9P+r81m57X94nMx72bH6PT/q/NOe1/eGZj3s2P0en/V+ac9r+8MzHvZsfo9P+r8057X94ZmPezY/R6f8AV+ac9r+8MzHvZsfo9P8Aq/NOe1/eGZgcGbH6PT9v5pz2v7zGZl22WClVjW02ujKdk5rTlCMt6NethqVa3KRTsVvcCy/MM9qryMOBg9G4T4aHuBZfmGe1ORhwHo3CfDQ9wLL8wz2pyMOA9G4T4aHuBZfmGe1ORhwHo3CfDQ9wLL8wz2pyMOA9G4T4aHuBZfmGe1ORhwHo3CfDQ9wLL8wz2pyMOA9G4T4aLtlsrKbbtNoa2Zgc52q8YqKsjZpUadKOWmrLqJVJkCAIDiPKv8Xs/wBd+By6ezPaS7PMyU95880b/iDqP2LrVPVMjPtug/i1m+pp/cC83W9pLtZge8urEQEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQHEeVf4vZ/rvwOXT2Z7SXZ5mSnvP/2Q==",
        link: "https://nlw-02-proffy.vercel.app/",
        github: "https://github.com/fabriciocunhauk/NLW-02-proffy"
    },
    {
        id: 13,
        name: "Eat smart",
        imgURL:
            "https://github.com/fabriciocunhauk/eat-smart-page/raw/master/assets/images/frontpage.jpg",
        link: "https://fabriciocunhauk.github.io/eat-smart-page",
        github: "https://github.com/fabriciocunhauk/eat-smart-page"

    },
    {
        id: 17,
        name: "Happy",
        imgURL:
            "https://github.com/rocketseat-education/nlw-03-omnistack/raw/master/.github/happy.png",
        link: "https://happy-vert-psi.vercel.app/",
        github: "https://github.com/fabriciocunhauk/happy"
    },
]

export default cardUrls;