import assert from 'node:assert/strict';
import test from 'node:test';
import { validarPontosSimulacao } from '../src/utils/simulacao.ts';

test('valida o minimo de 100 pontos exigido pelo Oracle', () => {
  for (const valor of [-1, 0, 99, 100.5, NaN, Infinity]) {
    assert.notEqual(validarPontosSimulacao(valor, 1500, 530), null);
  }
  assert.equal(validarPontosSimulacao(100, 1500, 530), null);
});

test('nao permite ultrapassar o saldo ou a tarifa', () => {
  assert.match(validarPontosSimulacao(700, 500, 1000)!, /pontos suficientes/);
  assert.match(validarPontosSimulacao(600, 1500, 530)!, /tarifa/);
  assert.equal(validarPontosSimulacao(530, 1500, 530), null);
});

test('mantem validacao para chamadas sem tarifa', () => {
  assert.equal(validarPontosSimulacao(500, 600), null);
});
