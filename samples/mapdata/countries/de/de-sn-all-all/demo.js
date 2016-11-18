$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "de-sn-14627000-14627090",
            "value": 0
        },
        {
            "hc-key": "de-sn-14627000-14627120",
            "value": 1
        },
        {
            "hc-key": "de-sn-14625000-14625480",
            "value": 2
        },
        {
            "hc-key": "de-sn-14625000-14625010",
            "value": 3
        },
        {
            "hc-key": "de-sn-14627000-14627200",
            "value": 4
        },
        {
            "hc-key": "de-sn-14627000-14627190",
            "value": 5
        },
        {
            "hc-key": "de-sn-14524000-14524240",
            "value": 6
        },
        {
            "hc-key": "de-sn-14627000-14627020",
            "value": 7
        },
        {
            "hc-key": "de-sn-14521000-14521140",
            "value": 8
        },
        {
            "hc-key": "de-sn-14625000-14625640",
            "value": 9
        },
        {
            "hc-key": "de-sn-14625000-14625330",
            "value": 10
        },
        {
            "hc-key": "de-sn-14628000-14628070",
            "value": 11
        },
        {
            "hc-key": "de-sn-14628000-14628270",
            "value": 12
        },
        {
            "hc-key": "de-sn-14625000-14625340",
            "value": 13
        },
        {
            "hc-key": "de-sn-14625000-14625610",
            "value": 14
        },
        {
            "hc-key": "de-sn-14729000-14729250",
            "value": 15
        },
        {
            "hc-key": "de-sn-14729000-14729070",
            "value": 16
        },
        {
            "hc-key": "de-sn-14625000-14625600",
            "value": 17
        },
        {
            "hc-key": "de-sn-14625000-14625320",
            "value": 18
        },
        {
            "hc-key": "de-sn-14627000-14627050",
            "value": 19
        },
        {
            "hc-key": "de-sn-14627000-14627340",
            "value": 20
        },
        {
            "hc-key": "de-sn-14625000-14625040",
            "value": 21
        },
        {
            "hc-key": "de-sn-14625000-14625100",
            "value": 22
        },
        {
            "hc-key": "de-sn-14625000-14625110",
            "value": 23
        },
        {
            "hc-key": "de-sn-14625000-14625530",
            "value": 24
        },
        {
            "hc-key": "de-sn-14729000-14729060",
            "value": 25
        },
        {
            "hc-key": "de-sn-14522000-14522010",
            "value": 26
        },
        {
            "hc-key": "de-sn-14522000-14522070",
            "value": 27
        },
        {
            "hc-key": "de-sn-14523000-14523330",
            "value": 28
        },
        {
            "hc-key": "de-sn-14521000-14521030",
            "value": 29
        },
        {
            "hc-key": "de-sn-14521000-14521530",
            "value": 30
        },
        {
            "hc-key": "de-sn-14523000-14523320",
            "value": 31
        },
        {
            "hc-key": "de-sn-14523000-14523050",
            "value": 32
        },
        {
            "hc-key": "de-sn-14523000-14523420",
            "value": 33
        },
        {
            "hc-key": "de-sn-14625000-14625470",
            "value": 34
        },
        {
            "hc-key": "de-sn-14625000-14625080",
            "value": 35
        },
        {
            "hc-key": "de-sn-14625000-14625540",
            "value": 36
        },
        {
            "hc-key": "de-sn-14625000-14625420",
            "value": 37
        },
        {
            "hc-key": "de-sn-14625000-14625350",
            "value": 38
        },
        {
            "hc-key": "de-sn-14626000-14626600",
            "value": 39
        },
        {
            "hc-key": "de-sn-14626000-14626100",
            "value": 40
        },
        {
            "hc-key": "de-sn-14625000-14625440",
            "value": 41
        },
        {
            "hc-key": "de-sn-14521000-14521280",
            "value": 42
        },
        {
            "hc-key": "de-sn-14521000-14521470",
            "value": 43
        },
        {
            "hc-key": "de-sn-14626000-14626200",
            "value": 44
        },
        {
            "hc-key": "de-sn-14626000-14626160",
            "value": 45
        },
        {
            "hc-key": "de-sn-14625000-14625280",
            "value": 46
        },
        {
            "hc-key": "de-sn-14625000-14625500",
            "value": 47
        },
        {
            "hc-key": "de-sn-14626000-14626480",
            "value": 48
        },
        {
            "hc-key": "de-sn-14626000-14626460",
            "value": 49
        },
        {
            "hc-key": "de-sn-14626000-14626590",
            "value": 50
        },
        {
            "hc-key": "de-sn-14524000-14524270",
            "value": 51
        },
        {
            "hc-key": "de-sn-14523000-14523460",
            "value": 52
        },
        {
            "hc-key": "de-sn-14523000-14523290",
            "value": 53
        },
        {
            "hc-key": "de-sn-14523000-14523130",
            "value": 54
        },
        {
            "hc-key": "de-sn-14523000-14523370",
            "value": 55
        },
        {
            "hc-key": "de-sn-14523000-14523200",
            "value": 56
        },
        {
            "hc-key": "de-sn-14729000-14729090",
            "value": 57
        },
        {
            "hc-key": "de-sn-14729000-14729320",
            "value": 58
        },
        {
            "hc-key": "de-sn-14729000-14729110",
            "value": 59
        },
        {
            "hc-key": "de-sn-14729000-14729330",
            "value": 60
        },
        {
            "hc-key": "de-sn-14729000-14729050",
            "value": 61
        },
        {
            "hc-key": "de-sn-14524000-14524180",
            "value": 62
        },
        {
            "hc-key": "de-sn-14625000-14625170",
            "value": 63
        },
        {
            "hc-key": "de-sn-14625000-14625140",
            "value": 64
        },
        {
            "hc-key": "de-sn-14524000-14524060",
            "value": 65
        },
        {
            "hc-key": "de-sn-14626000-14626440",
            "value": 66
        },
        {
            "hc-key": "de-sn-14626000-14626320",
            "value": 67
        },
        {
            "hc-key": "de-sn-14628000-14628390",
            "value": 68
        },
        {
            "hc-key": "de-sn-14628000-14628370",
            "value": 69
        },
        {
            "hc-key": "de-sn-14626000-14626020",
            "value": 70
        },
        {
            "hc-key": "de-sn-14626000-14626350",
            "value": 71
        },
        {
            "hc-key": "de-sn-14626000-14626580",
            "value": 72
        },
        {
            "hc-key": "de-sn-14626000-14626190",
            "value": 73
        },
        {
            "hc-key": "de-sn-14625000-14625510",
            "value": 74
        },
        {
            "hc-key": "de-sn-14521000-14521640",
            "value": 75
        },
        {
            "hc-key": "de-sn-14521000-14521710",
            "value": 76
        },
        {
            "hc-key": "de-sn-14625000-14625410",
            "value": 77
        },
        {
            "hc-key": "de-sn-14522000-14522220",
            "value": 78
        },
        {
            "hc-key": "de-sn-14627000-14627230",
            "value": 79
        },
        {
            "hc-key": "de-sn-14729000-14729080",
            "value": 80
        },
        {
            "hc-key": "de-sn-14522000-14522600",
            "value": 81
        },
        {
            "hc-key": "de-sn-14522000-14522510",
            "value": 82
        },
        {
            "hc-key": "de-sn-14521000-14521440",
            "value": 83
        },
        {
            "hc-key": "de-sn-14521000-14521130",
            "value": 84
        },
        {
            "hc-key": "de-sn-14521000-14521360",
            "value": 85
        },
        {
            "hc-key": "de-sn-14521000-14521270",
            "value": 86
        },
        {
            "hc-key": "de-sn-14521000-14521090",
            "value": 87
        },
        {
            "hc-key": "de-sn-14521000-14521510",
            "value": 88
        },
        {
            "hc-key": "de-sn-14521000-14521180",
            "value": 89
        },
        {
            "hc-key": "de-sn-14521000-14521600",
            "value": 90
        },
        {
            "hc-key": "de-sn-14524000-14524290",
            "value": 91
        },
        {
            "hc-key": "de-sn-14729000-14729020",
            "value": 92
        },
        {
            "hc-key": "de-sn-14524000-14524040",
            "value": 93
        },
        {
            "hc-key": "de-sn-14729000-14729190",
            "value": 94
        },
        {
            "hc-key": "de-sn-14729000-14729260",
            "value": 95
        },
        {
            "hc-key": "de-sn-14628000-14628020",
            "value": 96
        },
        {
            "hc-key": "de-sn-14628000-14628010",
            "value": 97
        },
        {
            "hc-key": "de-sn-14628000-14628130",
            "value": 98
        },
        {
            "hc-key": "de-sn-14729000-14729040",
            "value": 99
        },
        {
            "hc-key": "de-sn-14729000-14729410",
            "value": 100
        },
        {
            "hc-key": "de-sn-14524000-14524110",
            "value": 101
        },
        {
            "hc-key": "de-sn-14523000-14523170",
            "value": 102
        },
        {
            "hc-key": "de-sn-14627000-14627010",
            "value": 103
        },
        {
            "hc-key": "de-sn-14627000-14627150",
            "value": 104
        },
        {
            "hc-key": "de-sn-14729000-14729030",
            "value": 105
        },
        {
            "hc-key": "de-sn-14523000-14523380",
            "value": 106
        },
        {
            "hc-key": "de-sn-14521000-14521540",
            "value": 107
        },
        {
            "hc-key": "de-sn-14628000-14628320",
            "value": 108
        },
        {
            "hc-key": "de-sn-14628000-14628030",
            "value": 109
        },
        {
            "hc-key": "de-sn-14626000-14626370",
            "value": 110
        },
        {
            "hc-key": "de-sn-14522000-14522020",
            "value": 111
        },
        {
            "hc-key": "de-sn-14626000-14626210",
            "value": 112
        },
        {
            "hc-key": "de-sn-14523000-14523410",
            "value": 113
        },
        {
            "hc-key": "de-sn-14522000-14522320",
            "value": 114
        },
        {
            "hc-key": "de-sn-14626000-14626280",
            "value": 115
        },
        {
            "hc-key": "de-sn-14626000-14626530",
            "value": 116
        },
        {
            "hc-key": "de-sn-14625000-14625430",
            "value": 117
        },
        {
            "hc-key": "de-sn-14627000-14627220",
            "value": 118
        },
        {
            "hc-key": "de-sn-14625000-14625220",
            "value": 119
        },
        {
            "hc-key": "de-sn-14521000-14521290",
            "value": 120
        },
        {
            "hc-key": "de-sn-14524000-14524160",
            "value": 121
        },
        {
            "hc-key": "de-sn-14729000-14729160",
            "value": 122
        },
        {
            "hc-key": "de-sn-14524000-14524020",
            "value": 123
        },
        {
            "hc-key": "de-sn-14524000-14524280",
            "value": 124
        },
        {
            "hc-key": "de-sn-14521000-14521590",
            "value": 125
        },
        {
            "hc-key": "de-sn-14521000-14521420",
            "value": 126
        },
        {
            "hc-key": "de-sn-14521000-14521620",
            "value": 127
        },
        {
            "hc-key": "de-sn-14522000-14522200",
            "value": 128
        },
        {
            "hc-key": "de-sn-14521000-14521120",
            "value": 129
        },
        {
            "hc-key": "de-sn-14522000-14522190",
            "value": 130
        },
        {
            "hc-key": "de-sn-14522000-14522290",
            "value": 131
        },
        {
            "hc-key": "de-sn-14521000-14521250",
            "value": 132
        },
        {
            "hc-key": "de-sn-14521000-14521630",
            "value": 133
        },
        {
            "hc-key": "de-sn-14522000-14522390",
            "value": 134
        },
        {
            "hc-key": "de-sn-14524000-14524230",
            "value": 135
        },
        {
            "hc-key": "de-sn-14524000-14524010",
            "value": 136
        },
        {
            "hc-key": "de-sn-14524000-14524140",
            "value": 137
        },
        {
            "hc-key": "de-sn-14524000-14524210",
            "value": 138
        },
        {
            "hc-key": "de-sn-14729000-14729290",
            "value": 139
        },
        {
            "hc-key": "de-sn-14522000-14522580",
            "value": 140
        },
        {
            "hc-key": "de-sn-14521000-14521240",
            "value": 141
        },
        {
            "hc-key": "de-sn-14524000-14524120",
            "value": 142
        },
        {
            "hc-key": "de-sn-14522000-14522340",
            "value": 143
        },
        {
            "hc-key": "de-sn-14522000-14522110",
            "value": 144
        },
        {
            "hc-key": "de-sn-14729000-14729100",
            "value": 145
        },
        {
            "hc-key": "de-sn-14729000-14729170",
            "value": 146
        },
        {
            "hc-key": "de-sn-14729000-14729430",
            "value": 147
        },
        {
            "hc-key": "de-sn-14626000-14626570",
            "value": 148
        },
        {
            "hc-key": "de-sn-14626000-14626240",
            "value": 149
        },
        {
            "hc-key": "de-sn-14626000-14626450",
            "value": 150
        },
        {
            "hc-key": "de-sn-14626000-14626230",
            "value": 151
        },
        {
            "hc-key": "de-sn-14729000-14729220",
            "value": 152
        },
        {
            "hc-key": "de-sn-14625000-14625590",
            "value": 153
        },
        {
            "hc-key": "de-sn-14625000-14625380",
            "value": 154
        },
        {
            "hc-key": "de-sn-14628000-14628260",
            "value": 155
        },
        {
            "hc-key": "de-sn-14523000-14523360",
            "value": 156
        },
        {
            "hc-key": "de-sn-14523000-14523430",
            "value": 157
        },
        {
            "hc-key": "de-sn-14522000-14522470",
            "value": 158
        },
        {
            "hc-key": "de-sn-14522000-14522520",
            "value": 159
        },
        {
            "hc-key": "de-sn-14628000-14628205",
            "value": 160
        },
        {
            "hc-key": "de-sn-14628000-14628400",
            "value": 161
        },
        {
            "hc-key": "de-sn-14626000-14626050",
            "value": 162
        },
        {
            "hc-key": "de-sn-14626000-14626310",
            "value": 163
        },
        {
            "hc-key": "de-sn-14524000-14524170",
            "value": 164
        },
        {
            "hc-key": "de-sn-14523000-14523150",
            "value": 165
        },
        {
            "hc-key": "de-sn-14523000-14523280",
            "value": 166
        },
        {
            "hc-key": "de-sn-14625000-14625030",
            "value": 167
        },
        {
            "hc-key": "de-sn-14626000-14626060",
            "value": 168
        },
        {
            "hc-key": "de-sn-14625000-14625160",
            "value": 169
        },
        {
            "hc-key": "de-sn-14521000-14521460",
            "value": 170
        },
        {
            "hc-key": "de-sn-14524000-14524200",
            "value": 171
        },
        {
            "hc-key": "de-sn-14524000-14524250",
            "value": 172
        },
        {
            "hc-key": "de-sn-14522000-14522050",
            "value": 173
        },
        {
            "hc-key": "de-sn-14522000-14522430",
            "value": 174
        },
        {
            "hc-key": "de-sn-14522000-14522230",
            "value": 175
        },
        {
            "hc-key": "de-sn-14628000-14628380",
            "value": 176
        },
        {
            "hc-key": "de-sn-14627000-14627290",
            "value": 177
        },
        {
            "hc-key": "de-sn-14522000-14522620",
            "value": 178
        },
        {
            "hc-key": "de-sn-14627000-14627130",
            "value": 179
        },
        {
            "hc-key": "de-sn-14522000-14522450",
            "value": 180
        },
        {
            "hc-key": "de-sn-14627000-14627080",
            "value": 181
        },
        {
            "hc-key": "de-sn-14626000-14626610",
            "value": 182
        },
        {
            "hc-key": "de-sn-14626000-14626140",
            "value": 183
        },
        {
            "hc-key": "de-sn-14626000-14626170",
            "value": 184
        },
        {
            "hc-key": "de-sn-14627000-14627310",
            "value": 185
        },
        {
            "hc-key": "de-sn-14627000-14627140",
            "value": 186
        },
        {
            "hc-key": "de-sn-14524000-14524220",
            "value": 187
        },
        {
            "hc-key": "de-sn-14522000-14522460",
            "value": 188
        },
        {
            "hc-key": "de-sn-14729000-14729230",
            "value": 189
        },
        {
            "hc-key": "de-sn-14729000-14729150",
            "value": 190
        },
        {
            "hc-key": "de-sn-14522000-14522490",
            "value": 191
        },
        {
            "hc-key": "de-sn-14522000-14522280",
            "value": 192
        },
        {
            "hc-key": "de-sn-14625000-14625200",
            "value": 193
        },
        {
            "hc-key": "de-sn-14626000-14626400",
            "value": 194
        },
        {
            "hc-key": "de-sn-14524000-14524260",
            "value": 195
        },
        {
            "hc-key": "de-sn-14524000-14524190",
            "value": 196
        },
        {
            "hc-key": "de-sn-14628000-14628140",
            "value": 197
        },
        {
            "hc-key": "de-sn-14627000-14627360",
            "value": 198
        },
        {
            "hc-key": "de-sn-14521000-14521220",
            "value": 199
        },
        {
            "hc-key": "de-sn-14521000-14521690",
            "value": 200
        },
        {
            "hc-key": "de-sn-14521000-14521010",
            "value": 201
        },
        {
            "hc-key": "de-sn-14521000-14521150",
            "value": 202
        },
        {
            "hc-key": "de-sn-14523000-14523270",
            "value": 203
        },
        {
            "hc-key": "de-sn-14521000-14521380",
            "value": 204
        },
        {
            "hc-key": "de-sn-14521000-14521160",
            "value": 205
        },
        {
            "hc-key": "de-sn-14521000-14521610",
            "value": 206
        },
        {
            "hc-key": "de-sn-14521000-14521080",
            "value": 207
        },
        {
            "hc-key": "de-sn-14521000-14521700",
            "value": 208
        },
        {
            "hc-key": "de-sn-14521000-14521550",
            "value": 209
        },
        {
            "hc-key": "de-sn-14521000-14521340",
            "value": 210
        },
        {
            "hc-key": "de-sn-14521000-14521400",
            "value": 211
        },
        {
            "hc-key": "de-sn-14521000-14521060",
            "value": 212
        },
        {
            "hc-key": "de-sn-14523000-14523160",
            "value": 213
        },
        {
            "hc-key": "de-sn-14523000-14523110",
            "value": 214
        },
        {
            "hc-key": "de-sn-14625000-14625050",
            "value": 215
        },
        {
            "hc-key": "de-sn-14521000-14521100",
            "value": 216
        },
        {
            "hc-key": "de-sn-14524000-14524150",
            "value": 217
        },
        {
            "hc-key": "de-sn-14524000-14524130",
            "value": 218
        },
        {
            "hc-key": "de-sn-14524000-14524320",
            "value": 219
        },
        {
            "hc-key": "de-sn-14626000-14626085",
            "value": 220
        },
        {
            "hc-key": "de-sn-14521000-14521200",
            "value": 221
        },
        {
            "hc-key": "de-sn-14523000-14523250",
            "value": 222
        },
        {
            "hc-key": "de-sn-14729000-14729380",
            "value": 223
        },
        {
            "hc-key": "de-sn-14625000-14625290",
            "value": 224
        },
        {
            "hc-key": "de-sn-14625000-14625090",
            "value": 225
        },
        {
            "hc-key": "de-sn-14729000-14729370",
            "value": 226
        },
        {
            "hc-key": "de-sn-14627000-14627040",
            "value": 227
        },
        {
            "hc-key": "de-sn-14523000-14523010",
            "value": 228
        },
        {
            "hc-key": "de-sn-14627000-14627180",
            "value": 229
        },
        {
            "hc-key": "de-sn-14522000-14522480",
            "value": 230
        },
        {
            "hc-key": "de-sn-14521000-14521110",
            "value": 231
        },
        {
            "hc-key": "de-sn-14521000-14521170",
            "value": 232
        },
        {
            "hc-key": "de-sn-14522000-14522530",
            "value": 233
        },
        {
            "hc-key": "de-sn-14522000-14522360",
            "value": 234
        },
        {
            "hc-key": "de-sn-14628000-14628250",
            "value": 235
        },
        {
            "hc-key": "de-sn-14628000-14628040",
            "value": 236
        },
        {
            "hc-key": "de-sn-14522000-14522150",
            "value": 237
        },
        {
            "hc-key": "de-sn-14522000-14522420",
            "value": 238
        },
        {
            "hc-key": "de-sn-14628000-14628300",
            "value": 239
        },
        {
            "hc-key": "de-sn-14729000-14729140",
            "value": 240
        },
        {
            "hc-key": "de-sn-14628000-14628220",
            "value": 241
        },
        {
            "hc-key": "de-sn-14524000-14524070",
            "value": 242
        },
        {
            "hc-key": "de-sn-14626000-14626245",
            "value": 243
        },
        {
            "hc-key": "de-sn-14729000-14729010",
            "value": 244
        },
        {
            "hc-key": "de-sn-14522000-14522260",
            "value": 245
        },
        {
            "hc-key": "de-sn-14522000-14522060",
            "value": 246
        },
        {
            "hc-key": "de-sn-14522000-14522350",
            "value": 247
        },
        {
            "hc-key": "de-sn-14522000-14522550",
            "value": 248
        },
        {
            "hc-key": "de-sn-14522000-14522540",
            "value": 249
        },
        {
            "hc-key": "de-sn-14522000-14522300",
            "value": 250
        },
        {
            "hc-key": "de-sn-14626000-14626010",
            "value": 251
        },
        {
            "hc-key": "de-sn-14627000-14627170",
            "value": 252
        },
        {
            "hc-key": "de-sn-14521000-14521020",
            "value": 253
        },
        {
            "hc-key": "de-sn-14521000-14521560",
            "value": 254
        },
        {
            "hc-key": "de-sn-14626000-14626180",
            "value": 255
        },
        {
            "hc-key": "de-sn-14521000-14521450",
            "value": 256
        },
        {
            "hc-key": "de-sn-14627000-14627280",
            "value": 257
        },
        {
            "hc-key": "de-sn-14626000-14626270",
            "value": 258
        },
        {
            "hc-key": "de-sn-14522000-14522440",
            "value": 259
        },
        {
            "hc-key": "de-sn-14626000-14626030",
            "value": 260
        },
        {
            "hc-key": "de-sn-14626000-14626300",
            "value": 261
        },
        {
            "hc-key": "de-sn-14626000-14626470",
            "value": 262
        },
        {
            "hc-key": "de-sn-14626000-14626540",
            "value": 263
        },
        {
            "hc-key": "de-sn-14729000-14729340",
            "value": 264
        },
        {
            "hc-key": "de-sn-14626000-14626510",
            "value": 265
        },
        {
            "hc-key": "de-sn-14522000-14522370",
            "value": 266
        },
        {
            "hc-key": "de-sn-14522000-14522080",
            "value": 267
        },
        {
            "hc-key": "de-sn-14729000-14729360",
            "value": 268
        },
        {
            "hc-key": "de-sn-14524000-14524080",
            "value": 269
        },
        {
            "hc-key": "de-sn-14524000-14524330",
            "value": 270
        },
        {
            "hc-key": "de-sn-14524000-14524050",
            "value": 271
        },
        {
            "hc-key": "de-sn-14524000-14524030",
            "value": 272
        },
        {
            "hc-key": "de-sn-14626000-14626330",
            "value": 273
        },
        {
            "hc-key": "de-sn-14626000-14626520",
            "value": 274
        },
        {
            "hc-key": "de-sn-14524000-14524090",
            "value": 275
        },
        {
            "hc-key": "de-sn-14521000-14521370",
            "value": 276
        },
        {
            "hc-key": "de-sn-14522000-14522380",
            "value": 277
        },
        {
            "hc-key": "de-sn-14524000-14524310",
            "value": 278
        },
        {
            "hc-key": "de-sn-14522000-14522330",
            "value": 279
        },
        {
            "hc-key": "de-sn-14521000-14521210",
            "value": 280
        },
        {
            "hc-key": "de-sn-14521000-14521230",
            "value": 281
        },
        {
            "hc-key": "de-sn-14521000-14521040",
            "value": 282
        },
        {
            "hc-key": "de-sn-14628000-14628310",
            "value": 283
        },
        {
            "hc-key": "de-sn-14628000-14628190",
            "value": 284
        },
        {
            "hc-key": "de-sn-14521000-14521490",
            "value": 285
        },
        {
            "hc-key": "de-sn-14628000-14628210",
            "value": 286
        },
        {
            "hc-key": "de-sn-14626000-14626070",
            "value": 287
        },
        {
            "hc-key": "de-sn-14522000-14522500",
            "value": 288
        },
        {
            "hc-key": "de-sn-14521000-14521050",
            "value": 289
        },
        {
            "hc-key": "de-sn-14626000-14626390",
            "value": 290
        },
        {
            "hc-key": "de-sn-14521000-14521390",
            "value": 291
        },
        {
            "hc-key": "de-sn-14521000-14521670",
            "value": 292
        },
        {
            "hc-key": "de-sn-14523000-14523190",
            "value": 293
        },
        {
            "hc-key": "de-sn-14523000-14523340",
            "value": 294
        },
        {
            "hc-key": "de-sn-14523000-14523100",
            "value": 295
        },
        {
            "hc-key": "de-sn-14523000-14523260",
            "value": 296
        },
        {
            "hc-key": "de-sn-14626000-14626410",
            "value": 297
        },
        {
            "hc-key": "de-sn-14625000-14625560",
            "value": 298
        },
        {
            "hc-key": "de-sn-14625000-14625525",
            "value": 299
        },
        {
            "hc-key": "de-sn-14522000-14522120",
            "value": 300
        },
        {
            "hc-key": "de-sn-14626000-14626150",
            "value": 301
        },
        {
            "hc-key": "de-sn-14522000-14522590",
            "value": 302
        },
        {
            "hc-key": "de-sn-14522000-14522170",
            "value": 303
        },
        {
            "hc-key": "de-sn-14625000-14625630",
            "value": 304
        },
        {
            "hc-key": "de-sn-14627000-14627100",
            "value": 305
        },
        {
            "hc-key": "de-sn-14627000-14627210",
            "value": 306
        },
        {
            "hc-key": "de-sn-14522000-14522090",
            "value": 307
        },
        {
            "hc-key": "de-sn-14522000-14522250",
            "value": 308
        },
        {
            "hc-key": "de-sn-14729000-14729300",
            "value": 309
        },
        {
            "hc-key": "de-sn-14729000-14729400",
            "value": 310
        },
        {
            "hc-key": "de-sn-14628000-14628170",
            "value": 311
        },
        {
            "hc-key": "de-sn-14521000-14521260",
            "value": 312
        },
        {
            "hc-key": "de-sn-14521000-14521570",
            "value": 313
        },
        {
            "hc-key": "de-sn-14521000-14521500",
            "value": 314
        },
        {
            "hc-key": "de-sn-14628000-14628350",
            "value": 315
        },
        {
            "hc-key": "de-sn-14628000-14628150",
            "value": 316
        },
        {
            "hc-key": "de-sn-14628000-14628060",
            "value": 317
        },
        {
            "hc-key": "de-sn-14511000-14511000",
            "value": 318
        },
        {
            "hc-key": "de-sn-14522000-14522140",
            "value": 319
        },
        {
            "hc-key": "de-sn-14626000-14626250",
            "value": 320
        },
        {
            "hc-key": "de-sn-14521000-14521310",
            "value": 321
        },
        {
            "hc-key": "de-sn-14523000-14523450",
            "value": 322
        },
        {
            "hc-key": "de-sn-14523000-14523440",
            "value": 323
        },
        {
            "hc-key": "de-sn-14628000-14628410",
            "value": 324
        },
        {
            "hc-key": "de-sn-14522000-14522240",
            "value": 325
        },
        {
            "hc-key": "de-sn-14522000-14522035",
            "value": 326
        },
        {
            "hc-key": "de-sn-14522000-14522180",
            "value": 327
        },
        {
            "hc-key": "de-sn-14628000-14628360",
            "value": 328
        },
        {
            "hc-key": "de-sn-14523000-14523020",
            "value": 329
        },
        {
            "hc-key": "de-sn-14625000-14625490",
            "value": 330
        },
        {
            "hc-key": "de-sn-14625000-14625060",
            "value": 331
        },
        {
            "hc-key": "de-sn-14628000-14628100",
            "value": 332
        },
        {
            "hc-key": "de-sn-14625000-14625130",
            "value": 333
        },
        {
            "hc-key": "de-sn-14521000-14521520",
            "value": 334
        },
        {
            "hc-key": "de-sn-14628000-14628080",
            "value": 335
        },
        {
            "hc-key": "de-sn-14522000-14522400",
            "value": 336
        },
        {
            "hc-key": "de-sn-14521000-14521430",
            "value": 337
        },
        {
            "hc-key": "de-sn-14625000-14625150",
            "value": 338
        },
        {
            "hc-key": "de-sn-14523000-14523365",
            "value": 339
        },
        {
            "hc-key": "de-sn-14523000-14523350",
            "value": 340
        },
        {
            "hc-key": "de-sn-14523000-14523230",
            "value": 341
        },
        {
            "hc-key": "de-sn-14523000-14523080",
            "value": 342
        },
        {
            "hc-key": "de-sn-14523000-14523245",
            "value": 343
        },
        {
            "hc-key": "de-sn-14625000-14625360",
            "value": 344
        },
        {
            "hc-key": "de-sn-14626000-14626260",
            "value": 345
        },
        {
            "hc-key": "de-sn-14625000-14625190",
            "value": 346
        },
        {
            "hc-key": "de-sn-14625000-14625020",
            "value": 347
        },
        {
            "hc-key": "de-sn-14626000-14626120",
            "value": 348
        },
        {
            "hc-key": "de-sn-14626000-14626560",
            "value": 349
        },
        {
            "hc-key": "de-sn-14523000-14523090",
            "value": 350
        },
        {
            "hc-key": "de-sn-14523000-14523120",
            "value": 351
        },
        {
            "hc-key": "de-sn-14627000-14627070",
            "value": 352
        },
        {
            "hc-key": "de-sn-14625000-14625450",
            "value": 353
        },
        {
            "hc-key": "de-sn-14625000-14625180",
            "value": 354
        },
        {
            "hc-key": "de-sn-14625000-14625270",
            "value": 355
        },
        {
            "hc-key": "de-sn-14627000-14627260",
            "value": 356
        },
        {
            "hc-key": "de-sn-14713000-14713000",
            "value": 357
        },
        {
            "hc-key": "de-sn-14729000-14729350",
            "value": 358
        },
        {
            "hc-key": "de-sn-14625000-14625300",
            "value": 359
        },
        {
            "hc-key": "de-sn-14625000-14625230",
            "value": 360
        },
        {
            "hc-key": "de-sn-14626000-14626290",
            "value": 361
        },
        {
            "hc-key": "de-sn-14522000-14522570",
            "value": 362
        },
        {
            "hc-key": "de-sn-14628000-14628050",
            "value": 363
        },
        {
            "hc-key": "de-sn-14628000-14628110",
            "value": 364
        },
        {
            "hc-key": "de-sn-14612000-14612000",
            "value": 365
        },
        {
            "hc-key": "de-sn-14625000-14625390",
            "value": 366
        },
        {
            "hc-key": "de-sn-14625000-14625460",
            "value": 367
        },
        {
            "hc-key": "de-sn-14523000-14523310",
            "value": 368
        },
        {
            "hc-key": "de-sn-14729000-14729245",
            "value": 369
        },
        {
            "hc-key": "de-sn-14627000-14627250",
            "value": 370
        },
        {
            "hc-key": "de-sn-14626000-14626420",
            "value": 371
        },
        {
            "hc-key": "de-sn-14522000-14522310",
            "value": 372
        },
        {
            "hc-key": "de-sn-14628000-14628340",
            "value": 373
        },
        {
            "hc-key": "de-sn-14628000-14628330",
            "value": 374
        },
        {
            "hc-key": "de-sn-14625000-14625550",
            "value": 375
        },
        {
            "hc-key": "de-sn-14626000-14626430",
            "value": 376
        },
        {
            "hc-key": "de-sn-14627000-14627060",
            "value": 377
        },
        {
            "hc-key": "de-sn-14523000-14523030",
            "value": 378
        },
        {
            "hc-key": "de-sn-14627000-14627240",
            "value": 379
        },
        {
            "hc-key": "de-sn-14625000-14625570",
            "value": 380
        },
        {
            "hc-key": "de-sn-14627000-14627270",
            "value": 381
        },
        {
            "hc-key": "de-sn-14521000-14521330",
            "value": 382
        },
        {
            "hc-key": "de-sn-14521000-14521320",
            "value": 383
        },
        {
            "hc-key": "de-sn-14628000-14628230",
            "value": 384
        },
        {
            "hc-key": "de-sn-14626000-14626110",
            "value": 385
        },
        {
            "hc-key": "de-sn-14729000-14729270",
            "value": 386
        },
        {
            "hc-key": "de-sn-14627000-14627110",
            "value": 387
        },
        {
            "hc-key": "de-sn-14523000-14523060",
            "value": 388
        },
        {
            "hc-key": "de-sn-14522000-14522210",
            "value": 389
        },
        {
            "hc-key": "de-sn-14625000-14625120",
            "value": 390
        },
        {
            "hc-key": "de-sn-14626000-14626490",
            "value": 391
        },
        {
            "hc-key": "de-sn-14625000-14625310",
            "value": 392
        },
        {
            "hc-key": "de-sn-14625000-14625250",
            "value": 393
        },
        {
            "hc-key": "de-sn-14625000-14625580",
            "value": 394
        },
        {
            "hc-key": "de-sn-14524000-14524300",
            "value": 395
        },
        {
            "hc-key": "de-sn-14627000-14627030",
            "value": 396
        },
        {
            "hc-key": "de-sn-14524000-14524100",
            "value": 397
        },
        {
            "hc-key": "de-sn-14523000-14523300",
            "value": 398
        },
        {
            "hc-key": "de-sn-14523000-14523040",
            "value": 399
        },
        {
            "hc-key": "de-sn-14521000-14521410",
            "value": 400
        },
        {
            "hc-key": "de-sn-14628000-14628240",
            "value": 401
        },
        {
            "hc-key": "de-sn-14626000-14626500",
            "value": 402
        },
        {
            "hc-key": "de-sn-14628000-14628090",
            "value": 403
        },
        {
            "hc-key": "de-sn-14521000-14521355",
            "value": 404
        },
        {
            "hc-key": "de-sn-14625000-14625370",
            "value": 405
        },
        {
            "hc-key": "de-sn-14628000-14628160",
            "value": 406
        },
        {
            "hc-key": "de-sn-14625000-14625240",
            "value": 407
        },
        {
            "value": 408
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Highmaps basic demo'
        },

        subtitle : {
            text : 'Source map: <a href="https://code.highcharts.com/mapdata/countries/de/de-sn-all-all.js">Sachsen</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/de/de-sn-all-all'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#a4edba'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});
